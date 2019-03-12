import { trigger, transition, style, animate, AnimationMetadata } from '@angular/animations';

export const slideRight = (time) => {
    return {
        enter: [
            style({ transform: 'translateX(-100%)' }),
            animate(time)
        ],
        leave: [
            animate(time, style({ transform: 'translateX(100%)' }))
        ]
    };
};

export const slideLeft = (time) => {
    return {
        enter: [
            style({ transform: 'translateX(100%)' }),
            animate(time)
        ],
        leave: [
            animate(time, style({ transform: 'translateX(-100%)' }))
        ]
    };
};


export const fade = (time) => {
    return {
        enter: [
            style({ opacity: 0 }),
            animate(time)
        ],
        leave: [
            animate(time, style({ opacity: 0 }))
        ]
    };
};


export const animations = { fade, slideLeft, slideRight };

