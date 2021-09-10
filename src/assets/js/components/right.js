import { LocomotiveScroll } from '../main.js';
import { Splitting } from '../main.js';


// HOVER CONTENT RIGHT
const contentRight = document.querySelector('.content--right');
const contentHome = document.querySelector('.content--home');
const contentLeft = document.querySelector('.content--left');
const articleReves = document.querySelectorAll('.article-reve');
const header = document.querySelector('#masthead');
const rightContainerPropos = document.querySelector('.right--container-propos');
const contentRightO = document.querySelector('.content--right-oriented');
const titreReve = document.querySelector('.content--home-text-border');


if ( contentRight ){
    contentRight.addEventListener( 'click', () => {
        if ( contentLeft.classList.contains('is-open') ) {
            // CAN'T WITH IN THE RIGHT BANDEAU
        } else {
            contentRightEvents();
        }
    });

    contentHome.addEventListener( 'click', () => {
        if ( contentLeft.classList.contains('is-open') ) {
            // CAN'T WITH IN THE RIGHT BANDEAU
        } else {
            contentRightEventsOff();
        }
    });
}

function contentRightEvents(){
    articleReves.forEach( article => {

        // Hide all reves
        article.classList.add('is-hidden');

        // After reves have opacity 0, add multiples classes
        article.addEventListener( 'transitionend', (e) => {
            const articleOpacity = getComputedStyle(article).getPropertyValue('opacity');

            if ( articleOpacity === '0' ) {
                header.classList.add('right-is-open');
                contentHome.classList.add('right-is-open');
                contentRight.classList.add('is-open');
                contentRightO.classList.add('is-hidden');
            }

        });
    });

    contentRight.addEventListener( 'transitionend', (e) => {
        if ( contentRight.classList.contains('is-open') ) {
            if( e.propertyName === 'width' ) {
                titreReve.classList.add('is-visible');
                rightContainerPropos.classList.add('-is-visible');
                contentRight.classList.add('has-right-orientation');
                const proposSections = document.querySelectorAll('.propos--section');
                proposSections.forEach( section => {
                    section.classList.remove('is-hidden');
                });
            }
        }
    });

    contentLeft.classList.add('is-unclickable');

    removeAllClassesIfResize();
}

function contentRightEventsOff(){

    if ( contentRight.classList.contains('is-open') ) {

        // REMOVES ALL STYLES FROM A PROPOS SECTION
        titreReve.classList.remove('is-visible');
        rightContainerPropos.classList.remove('-is-visible');
        contentRight.classList.remove('has-right-orientation');
        const proposSections = document.querySelectorAll('.propos--section');
        proposSections.forEach( section => {
            section.classList.add('is-hidden');
        });

        // REMOVES ALL STYLES FROM BANDEAU
        header.classList.remove('right-is-open');
        contentHome.classList.remove('right-is-open');
        contentRight.classList.remove('is-open');
        contentRightO.classList.remove('is-hidden');

        articleReves.forEach( article => {
            if ( article.classList.contains('is-hidden') ) {
                // ici trouver quel animation doit être terminé pour finir l'animation
                article.classList.remove('is-hidden');
            }
        });
    }

    contentLeft.classList.remove('is-unclickable');


}

function removeAllClassesIfResize() {
    let tablet = window.matchMedia( '(min-width: 768px)' );
    tablet.addListener(breakpointChecker);

    function breakpointChecker() {
        if ( tablet.matches === false ){
            if ( contentHome.classList.contains('right-is-open') ) {
                contentHome.classList.remove('right-is-open');
            }
            if ( header.classList.contains('right-is-open') ) {
                header.classList.remove('right-is-open');
            }
            if ( contentRight.classList.contains('is-open') ) {
                contentRight.classList.remove('is-open');
            }
            if ( contentRightO.classList.contains('is-visible') ) {
                contentRightO.classList.remove('is-visible');
            }
            setTimeout ( () => {
                if ( contentRight.classList.contains('has-right-orientation') ) {
                    contentRight.classList.remove('has-right-orientation');
                }
            }, 1000 );
            if ( rightContainerPropos.classList.contains('-is-visible') ) {
                rightContainerPropos.classList.remove('-is-visible')
            }

        }
    }
}

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
