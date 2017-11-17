import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/animations';

export const slideUp = trigger('slideUp', [
    state('origin', style({ top: 'auto'})),
    state('leave', style({top: '-100%'})),
    transition('leave => origin', animate('180ms ease-in', keyframes([
        style({top: '-50%', offset: 0.5}),
        style({top: '-100%', offset: 1.0})
    ])))
]);