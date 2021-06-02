// HOVER CONTENT RIGHT
const contentRight = document.querySelector('.content--right');
const contentHome = document.querySelector('.content--home');
const header = document.querySelector('#masthead');
const rightContainerPropos = document.querySelector('.right--container-propos');
if ( contentRight ){
    contentRight.addEventListener( 'mouseenter', () => {
        contentRight.classList.add('is-open');
        setTimeout( () => {
            contentRight.classList.add('is-back');

        }, 1000 );
        contentHome.classList.add('right-is-open');
        header.classList.add('right-is-open');
        rightContainerPropos.classList.add('-is-visible');
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
        // console.log(target);

        if ( entry.intersectionRatio >= 0.25 ) {
            target.classList.add('is-visible');
            console.log(target);

            if ( target.classList.contains('propos--section-3') ) {
               rightContainer.style.backgroundColor = violet;
            } else if ( target.classList.contains('propos--section-4') ) {
               rightContainer.style.backgroundColor = violet;
            } else if ( target.classList.contains('propos--section-5') ) {
               rightContainer.style.backgroundColor = violet;
            } else if ( target.classList.contains('propos--section-6') ) {
               rightContainer.style.backgroundColor = violet;
            } else {
               rightContainer.style.backgroundColor = gris;
            }
        } else {
            target.classList.remove('is-visible');
        }
    });
}

const observer = new IntersectionObserver( callback, options );

sections.forEach( (section, index) => {
    observer.observe(section);
});

