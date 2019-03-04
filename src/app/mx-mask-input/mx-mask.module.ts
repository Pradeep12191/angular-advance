import { ModuleWithProviders, NgModule } from '@angular/core';

import { config, INITIAL_CONFIG, initialConfig, NEW_CONFIG, optionsConfig } from './config';
import { MaskApplierService } from './mx-mask-applier.service';
import { MaskDirective } from './mx-mask.directive';
import { MaskPipe } from './mx-mask.pipe';

@NgModule({
  providers: [MaskApplierService],
  exports: [MaskDirective, MaskPipe],
  declarations: [MaskDirective, MaskPipe]
})
export class MxMaskModule {

  public static forRoot(configValue?: optionsConfig): ModuleWithProviders {
    return {
      ngModule: MxMaskModule,
      providers: [
        {
          provide: NEW_CONFIG,
          useValue: configValue
        },
        {
          provide: INITIAL_CONFIG,
          useValue: initialConfig
        },
        {
          provide: config,
          useFactory: _configFactory,
          deps: [INITIAL_CONFIG, NEW_CONFIG]
        },
      ]
    };
  }
  public static forChild(configValue?: optionsConfig): ModuleWithProviders {
    return {
      ngModule: MxMaskModule,
    };
  }
}

/**
 * @internal
 */
export function _configFactory
(initConfig: optionsConfig, configValue: optionsConfig | (() => optionsConfig)): Function | optionsConfig {
  return (typeof configValue === 'function') ? configValue() : { ...initConfig, ...configValue };
}
