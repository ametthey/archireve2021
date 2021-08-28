import { Splitting } from '../main.js';

const target = document.querySelectorAll('.colored-hover');
const results = Splitting({ target: target, by: 'chars' });

// Colors
const cauchemar =  '#6755AA';
const concomitant =  '#2CAF38';
const creatif =  '#F79D65';
const actualite =  '#99BA22';
const recurrent =  '#DB5931';
const sexuel =  '#D67083';
const premonitoire =  '#4CA58E';
const lucide =  '#c12b2b';

const colors = [ cauchemar, concomitant, creatif, actualite, recurrent, sexuel, premonitoire, lucide ];

// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

const chars = document.querySelectorAll('.char');
chars.forEach( char => {
    char.addEventListener( 'mouseenter', (e) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        char.style.color = randomColor;
    });
    char.addEventListener( 'mouseleave', (e) => {
        char.style.color = '#fff';
    });
});





