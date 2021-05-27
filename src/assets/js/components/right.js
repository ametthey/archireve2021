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
        rightContainerPropos.classList.add('is-visible');
    });
}

