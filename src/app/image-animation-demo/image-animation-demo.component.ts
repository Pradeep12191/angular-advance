import { Component } from '@angular/core';
import { BgAnimationConfig } from './bg-animation/bg-animation.config';

@Component({
  selector: 'app-image-animation-demo',
  templateUrl: './image-animation-demo.component.html',
  styleUrls: ['./image-animation-demo.component.css']
})
export class ImageAnimationDemoComponent {
  config: BgAnimationConfig = {
    animationDelay: '2s',
    animation: 'slideRight',
    delayBetweenAnimation: 2000,
    images: [
      { path: 'https://raw.githubusercontent.com/Pradeep12191/angular-advance/master/src/assets/images/banner-1.png' },
      { path: 'https://raw.githubusercontent.com/Pradeep12191/angular-advance/master/src/assets/images/9a_Angular-JS-development.jpg' },
      { path: 'https://raw.githubusercontent.com/Pradeep12191/angular-advance/master/src/assets/images/ninja-1533330173110.jpg' },
      { path: 'https://raw.githubusercontent.com/Pradeep12191/angular-advance/master/src/assets/images/react.736da783.png' }
    ],
    playAnimationFirst: false
  };
}
