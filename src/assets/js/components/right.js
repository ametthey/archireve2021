// HOVER CONTENT RIGHT
const contentRight = document.querySelector('.content--right');
const contentHome = document.querySelector('.content--home');
const header = document.querySelector('#masthead');
const rightContainerPropos = document.querySelector('.right--container-propos');
if ( contentRight ){
    contentRight.addEventListener( 'mouseenter', () => {
        contentRightEvents();
    });

    contentHome.addEventListener( 'mouseenter', () => {
        // contentRightEventsOff();
    });
}


// CHANGE BACKGROUND COLOR ON SCROLL
// Intersection Observer Template
// https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/
// Change the .container--about elements
const sections = [...document.querySelectorAll('.propos--section')];
const rightContainer = document.querySelector('.content--right');
const violet = '#6755AA';
const gris = '#303030';

const options = {
    rootMargin: '0px',
    threshold: 0.25
}

const callback = (entries, observer) => {
    entries.forEach( (entry) => {
        const { target } = entry;


        if ( target.classList.contains('propos--section-1').isIntersecting ) {
            console.log('le propos section 1 est en pleine intersection');
        }

        if ( entry.intersectionRatio >= 0.25 ) {
            target.classList.add('is-visible');

            const targetParent = target.closest('.right--container-propos').classList.contains('-is-visible');

            if ( target.classList.contains('propos--section-1') && target.classList.contains('is-visible') ) {
                rightContainer.style.backgroundColor = gris;
                console.log('grey');
            } else if ( target.classList.contains('propos--section-2') && target.classList.contains('is-visible')) {
                rightContainer.style.backgroundColor = gris;
                console.log('grey');
            } else if ( target.classList.contains('propos--section-3') && target.classList.contains('is-visible')) {
                rightContainer.style.backgroundColor = gris;
                console.log('grey');
            } else if ( target.classList.contains('propos--section-4') && target.classList.contains('is-visible')) {
                rightContainer.style.backgroundColor = violet;
                console.log('violet');
            } else if ( target.classList.contains('propos--section-5') && target.classList.contains('is-visible')) {
                rightContainer.style.backgroundColor = violet;
                console.log('violet');
            } else if ( target.classList.contains('propos--section-6') && target.classList.contains('is-visible')) {
                rightContainer.style.backgroundColor = violet;
                console.log('violet');
            } else {
                rightContainer.style.backgroundColor = gris;
                console.log('grey');
            }
        } else {
            target.classList.remove('is-visible');
        }
    });
}

const observer = new IntersectionObserver( callback, options );

sections.forEach( (section, index) => {
    // observer.observe(section);
});

function contentRightEvents(){
    contentRight.classList.add('is-open');
    setTimeout( () => {
        contentRight.classList.add('is-back');

        const proposSections = document.querySelectorAll('.propos--section');
        proposSections.forEach( section => {
            if ( contentRight.classList.contains('is-back') ) {
                setTimeout( () => {
                    section.classList.remove('is-hidden');
                }, 1000 );
            }
        });
    }, 1000 );
    contentHome.classList.add('right-is-open');
    header.classList.add('right-is-open');
    rightContainerPropos.classList.add('-is-visible');
}
function contentRightEventsOff(){
    contentRight.classList.remove('is-open');
    setTimeout( () => {
        contentRight.classList.remove('is-back');

        const proposSections = document.querySelectorAll('.propos--section');
        proposSections.forEach( section => {
            if ( contentRight.classList.contains('is-back') ) {
                setTimeout( () => {
                    section.classList.add('is-hidden');
                }, 1000 );
            }
        });
    }, 1000 );
    contentHome.classList.remove('right-is-open');
    header.classList.remove('right-is-open');
    rightContainerPropos.classList.remove('-is-visible');
}







// FADING CRAZY
