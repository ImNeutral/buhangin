import { keyframes, style } from '@angular/animations';

export const slideOutLeft = [
    style({transform: 'translate3d(0, 0, 0)', offset: 0}),
    style({transform: 'translate3d(-150%, 15%, 0)', opacity: .5, offset: 1}),
]

export const zoomOutRight = [
    style({transform: 'translate3d(0, 0, 0)', offset: 0}),
    style({transform: 'translate3d(150%, 15%, 0)', opacity: .5, offset: 1}),
]
