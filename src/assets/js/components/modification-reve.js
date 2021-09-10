const buttonText = document.querySelector('.contenu--button-texte');
const buttonDessin = document.querySelector('.contenu--button-dessin');
const containerDessin = document.querySelector('.dessin--wrapper');
const containerCreationReve = document.querySelector('.content--creation-reve');
const contenuText = document.querySelector('.acf-field-610161fcb8f44');
const contenuDessin = document.querySelector('.acf-field-dessin .image-container');
const srcDessin = document.querySelector('#acf-field_6104fb96d7330');

window.addEventListener( 'DOMContentLoaded', (e) => {
    const singleReve = document.querySelector('.single-reve');
    if ( singleReve ) {

        // SI IL Y A DU TEXTE
        // if ( contenuText.innerHTML ) {
        //     if ( buttonText ){
        //         buttonText.classList.add('rounded--black');
        //     } else {
        //         buttonText.classList.remove('rounded--black');
        //     }
        // }

        // SI IL YA  DU DESSIN
        // if ( contenuDessin ) {
        //     console.log( contenuDessin );
        //     if ( buttonDessin ) {
        //         buttonDessin.classList.add('rounded--black');
        //     } else {
        //         buttonDessin.classList.remove('rounded--black');
        //     }
        // }

        // ON CREE LA ZONE AVEC L'IMAGE

        dessinHTML = `
                    <div class="acf-field acf-field-dessin">
                        <div class="image-container">
                            <img src="${srcDessin.value}" alt="">
                        </div>
                        <div class="button--rounded contenu--button-dessin-edit"><span>Modifier son dessin</span></div>
                    </div>
                `;
        contenuText.insertAdjacentHTML('afterend', dessinHTML);

        // buttonText.addEventListener( 'click', (e) => {
        //     buttonText.classList.toggle('rounded--black');
        //     contenuTexte.classList.toggle('textearea--visible');
        // });
        // buttonDessin.addEventListener( 'click', (e) => {
        //     buttonDessin.classList.toggle('rounded--black');
        //     containerDessin.classList.add('-is-active');
        //     console.log(`
        //     On click sur .contenu--button-dessin pour ouvrir le canvas de dessin
        //     fichier: creation-reve.js
        //     `);
        // });
    }
});
