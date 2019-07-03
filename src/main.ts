import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
// import { defineCustomElements } from 'uc-components/loader';
// import { defineCustomElements } from 'dx-project/loader';
// import { defineCustomElements } from 'dx-accordion/loader';
import {defineCustomElements} from 'dx-accordion/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  // polyfill for image cropper.
  if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
      value: function (callback, type, quality) {
        const dataURL = this.toDataURL(type, quality).split(',')[1];
        setTimeout(function () {

          const binStr = atob(dataURL),
            len = binStr.length,
            arr = new Uint8Array(len);

          for (let i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }

          callback(new Blob([arr], { type: type || 'image/png' }));

        });
      }
    });
  }
}).catch(err => console.log(err));

defineCustomElements(window);
