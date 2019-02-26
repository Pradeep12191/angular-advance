import { trigger, state, style, transition, animate } from "@angular/animations";

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
        animate('1s')
    ]),
])

export const slideRight = trigger('slideRight', [
    transition(':enter', [
        style({
            
        })
    ])
])