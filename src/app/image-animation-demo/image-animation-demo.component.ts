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
    animation: 'fade',
    delayBetweenAnimation: 2000,
    images: [
      { path: '/assets/images/banner-1.png' },
      { path: '/assets/images/9a_Angular-JS-development.jpg' },
      { path: '/assets/images/ninja-1533330173110.jpg' },
      { path: '/assets/images/react.736da783.png' }
    ],
    playAnimationFirst: false
  };
}
