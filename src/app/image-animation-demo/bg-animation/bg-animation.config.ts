export interface BgAnimationConfig {
    images: { path: string }[];
    animation?: 'slideRight' | 'fade' | 'slideLeft';
    playAnimationFirst?: boolean;
    delayBetweenAnimation?: number;
    animationDelay?: number | string;
}
