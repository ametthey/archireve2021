const contentHomeLogo = document.querySelector('.content--home-logo');
const contentHomeLogoSVG = document.querySelector('.content--home-logo svg');
const headerLogo = document.querySelector('.site-branding');
const lines = document.querySelectorAll('.line');

if ( contentHomeLogo && contentHomeLogoSVG && lines ) {
    // ANIMATION AUTOMATIC
    lines.forEach( line => {
        line.addEventListener( 'animationend', (e) => {
            // console.log('animation ended !');
            setTimeout( function() {
                contentHomeLogoSVG.classList.add('is-animated');
            }, 750 );

            contentHomeLogoSVG.addEventListener('transitionend', (e) => {
                if ( e.propertyName === 'width' ) {
                    contentHomeLogo.classList.add('is-hidden');
                }
            });
        });
    });
}
