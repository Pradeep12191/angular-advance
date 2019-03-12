import { trigger, transition, style, animate, AnimationMetadata } from '@angular/animations';

export const imageState = trigger('imageState', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('3s')
    ]),
    transition(':leave', [
        animate('3s', style({ opacity: 0 }))
    ])
]);

export const slideIn = trigger('imageStateSlide', [
    transition(':enter', [
        style(
            { transform: 'translateX(-100%)' },
        ),
        animate('3s')
    ]),
    transition(':leave', [
        animate('3s', style({ transform: 'translateX(100%)' }))
    ])
]);

export const slideRight = {
    slideIn: [
        style({ transform: 'translateX(-100%)' }),
        animate('3s')
    ],
    slideOut: [
        animate('3s', style({ transform: 'translateX(100%)' }))
    ]
};

