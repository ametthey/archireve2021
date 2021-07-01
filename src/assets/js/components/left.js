// HOVER CONTENT LEFT
const contentLeft = document.querySelector('.content--left');
const contentHome = document.querySelector('.content--home');
if( contentLeft ){
    contentLeft.addEventListener( 'mouseenter', () => {
        contentLeft.classList.add('is-open');
    });

    contentLeft.addEventListener( 'click', () => {
        contentLeft.classList.add('is-open');

    });

    // contentLeft.addEventListener( 'mouseleave', () => {
    //     contentLeft.classList.remove('is-open');
    // });

    if ( contentLeft.classList.contains('is-open') ) {
        contentHome.addEventListener( 'click', () => {
            // contentLeft.classList.remove('is-open');
        });
    }

}
