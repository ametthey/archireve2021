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
        contentRightEvents();
    });

    contentHome.addEventListener( 'click', () => {
        contentRightEventsOff();
    });
}

function contentRightEvents(){
    articleReves.forEach( article => {
        article.classList.add('is-hidden');

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

    removeAllClassesIfResize();

    whatWidth();
}

function contentRightEventsOff(){
    const proposSections = document.querySelectorAll('.propos--section');
    proposSections.forEach( section => {
        section.classList.add('is-hidden');
        section.addEventListener( 'transitionend', (e) => {
            const sectionOpacity = getComputedStyle(section).getPropertyValue('opacity');

            if ( sectionOpacity === '0' ) {
                contentHome.classList.remove('right-is-open');
                contentRight.classList.remove('is-open');
            }
        });
    });

    titreReve.classList.remove('is-visible');


    contentRight.addEventListener( 'transitionend', (e) => {
        if ( !contentRight.classList.contains('is-open') ) {
            if( e.propertyName === 'width' ) {
                header.classList.remove('right-is-open');

                articleReves.forEach( article => {
                    article.classList.remove('is-hidden');
                });

                contentRightO.classList.remove('is-hidden');

                rightContainerPropos.classList.remove('-is-visible');

                contentRight.classList.remove('has-right-orientation');
            }
        }
    });

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

function whatWidth() {
    console.log( `content left is ${contentLeft.offsetWidth}px` );
    console.log( `content center is ${contentHome.offsetWidth}px` );
    console.log( `content right is ${contentRight.offsetWidth}px` );
    console.log( `window is ${window.innerWidth}px` );

    // setTimeout( function() {
    //     console.clear();
    // }, 5000 );
}
