!function(r){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=23)}({23:function(e,n,r){e.exports=r(24)},24:function(e,n){var r=document.querySelector('.login-action-login label[for="user_login"]');r&&(r.innerText="Mail");var t=document.querySelector('.login-action-login label[for="user_pass"]');t&&(t.innerText="Mot de passe");var o=document.querySelector("#wp-submit");o&&(o.value="Continuer"),document.querySelector(".login-action-register .message.register").innerHTML="\n    <h1>INSCRIPTION</h1>\n    <h2>ENTREZ VOTRE ADRESSE MAIL POUR CRÉER VOTRE COMPTE</h2>\n";var i=document.querySelector('.login-action-register label[for="user_email"]');i&&(console.log(i),i.innerText="Mail"),window.addEventListener("resize",function(){console.log(window.innerWidth)})}});