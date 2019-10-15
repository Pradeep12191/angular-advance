import { trigger, state, transition, animate, style } from "@angular/animations";

export const slideRight = trigger('slideRight', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate("100ms 0.5s")
    ])
]);
