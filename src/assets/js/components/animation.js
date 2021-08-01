// import { gsap } from '../main.js';
import anime from 'animejs/lib/anime.es.js';

// GSAP Property
// https://greensock.com/get-started/#2d-and-3d-transforms

// const stagger = 0.2;
// const duration = 2;
//
// setTimeout( function(e){
//     gsap.timeline()
// to -> out
// .to('.letter', {
//     scale: '0.90',
//     duration: duration,
//     yoyo:true,
//     repeat:-1,
//     ease: 'power2',
// })
// .to('.container-logo-haut', {
//     yPercent: -100,
//     duration: duration,
//     ease: 'power2',
// },"<")
// .to('.container-logo-bas', {
//     yPercent: 100,
//     duration: duration,
//     ease: 'power2',
// },"<")
;
// }, 3000);

// ANIMEJS LINE DRAWING
// anime({
//     targets: '#a',
//     strokeDashoffset: [anime.setDashoffset, 100],
//     easing: 'easeInOutSine',
//     duration: 1500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'normal',
//     loop: false
// });

// ANIMEJS MORPH
// Letter A
anime({
targets: '#a',
points: [
  { value: 'M53.898 0h31l53.88 153.735h13.1v5.575H113.01v-5.575h14.025l-16.328-44.529H35.431l-16.115 44.529h19.482v5.685l-38.8-.384v-5.3H12.74L66.388 5.302h-12.49zm54.9 103.48L72.962 5.301 37.556 103.48z'},
    {value: 'M31.807 0h68.28l55.981 153.735h15.69v5.3h-72.52v-5.3h29.9l-16.328-44.529H37.533l-16.115 44.529h30.746v5.3H0v-5.3h14.844L68.492 5.301H31.807zm79.094 103.48L75.065 5.301 39.658 103.48z'}
],
easing: 'easeOutQuad',
duration: 2000,
loop: true
});
