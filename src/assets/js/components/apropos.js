import { LocomotiveScroll } from '../main.js';

const tempAPropos = document.querySelector('.page-template-page-a-propos');
const home = document.querySelector('.page-template-page-home');

if ( tempAPropos || home ) {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    // COLLAPSE
    const aproposContainer = document.querySelectorAll('.propos--collapse-container');

    aproposContainer.forEach( container => {
        const header = container.querySelector('.propos--collapse-header');
        const texte = container.querySelector('.propos--collapse-texte');

        header.addEventListener( 'click', function() {
            if ( texte.classList.contains('-is-active') ) {

                header.classList.remove('-is-active');
                texte.classList.remove('-is-active');

                if ( texte.style.maxHeight ) {
                    texte.style.maxHeight = null;
                }

            } else if ( !texte.classList.contains('-is-active') ) {

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

            }
        });
    });


    // FADE BACKGROUND ON SCROLL
    let LAST_KNOWN_SCROLL_POSITION = 0;
    let TICKING = false;
    const aProposWrapper = document.querySelector('.content--apropos');
    let aProposWrapperHeight;
    const elemToObserve = document.querySelector('.content--right');
    let prevClassState = elemToObserve.classList.contains('is-open');
    let currentClassState;

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.attributeName == "class"){
                currentClassState = mutation.target.classList.contains('is-open');
                if(prevClassState !== currentClassState)    {
                    prevClassState = currentClassState;
                    if(currentClassState) {
                        if ( elemToObserve.classList.contains('is-open') ) {
                            // CHANGE BACKGROUND COLOR ON SCROLL
                            elemToObserve.addEventListener('scroll', function() {
                                LAST_KNOWN_SCROLL_POSITION = elemToObserve.scrollTop;
                                aProposWrapperHeight = aProposWrapper.offsetHeight;
                                const half = aProposWrapperHeight / 2;

                                if (!TICKING) {
                                    window.requestAnimationFrame(function() {
                                        if ( LAST_KNOWN_SCROLL_POSITION < half ) {
                                            aProposWrapper.classList.remove('is-fading');
                                        } else if ( LAST_KNOWN_SCROLL_POSITION > half) {
                                            aProposWrapper.classList.add('is-fading');
                                        }
                                        TICKING = false;
                                    });
                                    TICKING = true;
                                }
                            })

                            // FADE IN TEXTE ON SCROLL
                            const sections = [...document.querySelectorAll(".propos--section")];

                            let options = {
                                rootMargin: "0px",
                                threshold: 0.25
                            };

                            const callback = (entries, observer) => {
                                entries.forEach(entry => {
                                    const { target } = entry;

                                    if (entry.intersectionRatio >= 0.25) {
                                        target.classList.add("is-visible");
                                    } else {
                                    }
                                });
                            };

                            const observer = new IntersectionObserver(callback, options);

                            sections.forEach((section, index) => {
                                observer.observe(section);
                            });

                            // window.onload(removeClass());


                        }
                    } else {
                        // Silence is golden
                    }
                }
            }
        });
    });
    observer.observe(elemToObserve, {attributes: true});
}


