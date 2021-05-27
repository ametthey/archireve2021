// querySelector for label
// https://stackoverflow.com/questions/20695934/queryselector-to-find-label-in-pure-js
const username = document.querySelector('label[for="user_login"]');
username.innerText = 'Mail';
const password = document.querySelector('label[for="user_pass"]');
password.innerText = 'Mot de passe';
const logIn = document.querySelector('#wp-submit');
logIn.value = 'Continuer';

console.log(`Est ce que le login est en train de charger ou pas ?`);
