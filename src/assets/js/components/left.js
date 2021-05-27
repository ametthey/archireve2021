// HOVER CONTENT LEFT
const contentLeft = document.querySelector('.content--left');
if( contentLeft ){
    contentLeft.addEventListener( 'mouseenter', () => {
        contentLeft.classList.add('is-open');
    });

    contentLeft.addEventListener( 'click', () => {
        contentLeft.classList.add('is-open');
    });

    contentLeft.addEventListener( 'mouseleave', () => {
        // contentLeft.classList.remove('is-open');
    });
}
