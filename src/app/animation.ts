import { trigger, state, style, transition, animate, group, sequence } from "@angular/animations";

export const animation = trigger('clickedTrigger', [
    state('default', style({
        backgroundColor: 'orange',
        height: '100px',
        width: '100px',
        border:'5px solid black'
        
    })),
    state('clicked', style({
        backgroundColor: 'blue',
        height: '100px',
        width: '100px',
        border:'5px solid black'        
    })),
    transition('default => clicked', [
        style({
            height: '100px',
            width: '100px',
            backgroundColor: 'red',
            border:'5px solid black'
        }),
        animate('2000ms'),
        style({
            height: '100px',
            width: '100px',
            backgroundColor: 'black',
            border:'5px solid black'
            
        }),
        animate('500ms'),
    ])
])

export const showTrigger = trigger('show', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('10s')
    ]),
])

export const slideUp = trigger('slideUp', [
    transition(':enter', [
        style({
            transform: 'translateY(100%)'
        }),
        animate('0.5s ease-in-out')
    ]),
])

export const slideRight = trigger('slideRight', [
    transition(':enter', [
        style({
            
        })
    ])
]);
export const groupAnimation = trigger('group', [
transition(':enter', [
    style({
        transform: 'translateY(100%)'
    }),
    sequence([
    // animate('1s', style({ backgroundColor: 'black' })),
    // animate('2s', style({ color: 'white' })),
    // animate('2s 2s ease-in-out', style({transform: 'translateY(50%)'})),
    animate('2s 2s ease-in-out', style({transform: 'translateY(0%)'}))
  ])
])
]);
