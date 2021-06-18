/*
 * PAGE DE CONNEXION
 */

// querySelector for label
// https://stackoverflow.com/questions/20695934/queryselector-to-find-label-in-pure-js
const username = document.querySelector('.login-action-login label[for="user_login"]');
if ( username ) {
    username.innerText = 'Mail';
}
const password = document.querySelector('.login-action-login label[for="user_pass"]');
if ( password ) {
    password.innerText = 'Mot de passe';
}
const logIn = document.querySelector('#wp-submit');
if ( logIn ) {
    logIn.value = 'Continuer';
}

/*
 * PAGE D'INSCRIPTION
 */
const messageInscription = document.querySelector('.login-action-register .message.register');
messageInscription.innerHTML = `
    <h1>INSCRIPTION</h1>
    <h2>ENTREZ VOTRE ADRESSE MAIL POUR CRÉER VOTRE COMPTE</h2>
`;

const mail = document.querySelector( '.login-action-register label[for="user_email"]' );
if ( mail ) {
    console.log( mail );
    mail.innerText = 'Mail';
}


/*
 * HELPER FUNCTIONS
 */
window.addEventListener('resize', () => {
    console.log( window.innerWidth );
});

