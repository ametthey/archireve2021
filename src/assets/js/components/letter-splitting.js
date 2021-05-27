import Splitting from 'splitting';

const target = document.querySelectorAll('.colored-hover');
const results = Splitting({ target: target, by: 'chars' });

const colors = ['#303030','#6453A3', '#6755AA', '#2CAF28', '#F79D65', '#99BA22', '#C12B2B', '#4CA58E', '#DB5931', '#D67083' ];

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





