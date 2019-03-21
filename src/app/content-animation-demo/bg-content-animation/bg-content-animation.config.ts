export interface BgContentAnimationConfig {
    animation?: 'fade' | 'slideRight' | 'slideLeft';
    animationDuration?: string | number;
    autoPlay?: boolean;
    arrowIndicators?: boolean;
    pageIndicators?: boolean;
    playInfinite?: boolean;
    playAnimationAtFirst?: boolean;
    interval?: number;
    manualTrigger?: boolean;
}
