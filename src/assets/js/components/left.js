// HOVER CONTENT LEFT
const contentLeft = document.querySelector('.content--left');
const contentRight = document.querySelector('.content--right');
const buttonLeft = document.querySelector('#left--button');
const loupe = document.querySelector('.content--left-cover');
const filters = document.querySelectorAll('.left--filter');

if( contentLeft ){

    // buttonLeft.addEventListener( 'click', (e) => {
    contentLeft.addEventListener( 'click', (e) => {
        if ( contentLeft.classList.contains('is-open') ) {
            contentLeft.classList.remove('is-open');
            contentRight.classList.remove('is-unclickable');
        } else {
            contentLeft.classList.add('is-open');
            contentRight.classList.add('is-unclickable');
            console.log('is open on content left')
        }
    });

    contentLeft.addEventListener( 'transitionstart', (e) => {
        const contentLeftEvent = e.target;

        if ( !contentLeftEvent.classList.contains('is-open')  ) {
            if ( e.propertyName === 'width' ) {
                buttonLeft.classList.remove('is-open');
                filters.forEach( filter => {
                    filter.classList.remove('is-visible');
                });
            }
        }

        if ( e.propertyName === 'width' ) {
            loupe.classList.add('is-invisible');
        }
    });

    contentLeft.addEventListener( 'transitionend', (e) => {
        const contentLeftEvent = e.target;

        if ( contentLeftEvent.classList.contains('is-open')  ) {
            if ( e.propertyName === 'width' ) {
                buttonLeft.classList.add('is-open');
                filters.forEach( filter => {
                    filter.classList.add('is-visible');
                });
            }
        }

        if ( !contentLeftEvent.classList.contains('is-open')  ) {
            if ( e.propertyName === 'width' ) {
                loupe.classList.remove('is-invisible');
            }
        }
    });

}
//
// if ( contentRight.classList.contains('is-open') ) {
//     contentLeft.classList.add('is-unclikable');
//     contentLeft.classList.remove('is-unclikable');
// } else {
// }
//
// if ( contentLeft.classList.contains('is-open') ) {
// } else {
// }
