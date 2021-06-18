const headerButton = document.querySelector('#header--mobile-apropos');
const headerAPropos = document.querySelector('.right--container-propos-header');

headerButton.addEventListener( 'click', (e) => {
    e.preventDefault();

    console.log('click sur le bouton pour faire apparaitre le header')

    headerAPropos.classList.toggle('is-active');

});
