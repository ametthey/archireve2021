import { LocomotiveScroll } from '../main.js';
const tempAPropos = document.querySelector('.page-template-page-a-propos');

if ( tempAPropos ){
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });
}


const aproposContainer = document.querySelectorAll('.propos--collapse-container');

aproposContainer.forEach( container => {
    const header = container.querySelector('.propos--collapse-header');
    const texte = container.querySelector('.propos--collapse-texte');

    header.addEventListener( 'click', function() {
        if ( texte.classList.contains('-is-active') ) {
            console.log(`La classe active est la`);

            const activeElements = Array.from(document.querySelectorAll('.-is-active'));
            activeElements.forEach(activeElement => {
                const activeText = activeElement.classList.contains('propos--collapse-texte');
                if ( activeText ) {
                    const theActiveText = activeElement;
                    if ( theActiveText.style.maxHeight ) {
                        theActiveText.style.maxHeight  = null;
                    }
                }
                activeElement.classList.remove('-is-active');
            });

            header.classList.remove('-is-active');
            texte.classList.remove('-is-active');

            if ( texte.style.maxHeight ) {
                texte.style.maxHeight = null;
            }

            console.log( texte.style.maxHeight );
        } else if ( !texte.classList.contains('-is-active') ) {
            console.log(`La classe active n'est pas la`);

            const activeElements = Array.from(document.querySelectorAll('.-is-active'));
            activeElements.forEach(activeElement => {
                const activeText = activeElement.classList.contains('propos--collapse-texte');
                if ( activeText ) {
                    const theActiveText = activeElement;
                    if ( theActiveText.style.maxHeight ) {
                        theActiveText.style.maxHeight  = null;
                    }
                }
                activeElement.classList.remove('-is-active');
            });

            header.classList.add('-is-active');
            texte.classList.add('-is-active');

            texte.style.maxHeight = texte.scrollHeight + "px";

            console.log( texte.style.maxHeight );
        }
    });
});
