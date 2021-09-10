// import canvas2svg from 'canvas2svg';

// https://getbutterfly.com/how-to-draw-on-canvas-and-save-the-result-using-vanilla-javascript/
const container = document.querySelector('.dessin--container');


if ( container ) {
    const canvas = document.getElementById('dessin--canvas');
    const ctx = canvas.getContext('2d');
    const recommencer = document.querySelector('#reset');
    const widthContainer = container.offsetWidth;
    const heightContainer =  container.offsetHeight;
    const eraser = document.querySelector('#eraser');
    let dessinTermine = document.querySelector('.dessin--termine');
    const wrapperDessin = document.querySelector('.dessin--wrapper');
    const contenuTexte = document.querySelector('.acf-field-610161fcb8f44');
    const contenuDessin = document.querySelector('#acf-field_6104fb96d7330');
    const uploadButton = document.querySelector('#upload-button');
    const noir = '#303030';
    const cauchemar =  '#6755AA';
    const concomitant =  '#2CAF38';
    const creatif =  '#F79D65';
    const actualite =  '#99BA22';
    const recurrent =  '#DB5931';
    const sexuel =  '#D67083';
    const premonitoire =  '#4CA58E';
    const lucide =  '#c12b2b';
    const colors = [ 'noir', 'cauchemar', 'concomitant', 'creatif', 'actualite', 'recurrent', 'sexuel', 'premonitoire', 'lucide' ];

    // DIMENSION DU CANVAS
    canvas.style.width = `${widthContainer}px`;
    canvas.style.height= `${heightContainer}px`;

    canvas.width = widthContainer;
    canvas.height = heightContainer;

    // PARAMETRE DU STYLÉ
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    //////////////////////////////////////////////////////////////////////////
    // Drawing
    //////////////////////////////////////////////////////////////////////////

    // POSITION DE LA SOURIS
    function getMousePos(canvas, evt) {
        let rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    // DESSIN EN FONCTION DE LA POSITION DE LA SOURIS
    function mouseMove(evt) {
        let mousePos = getMousePos(canvas, evt);

        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
    }


    // EVENEMENT DU DESSIN DANS LE CANVAS
    canvas.addEventListener('mousedown', (evt) => {
        let mousePos = getMousePos(canvas, evt);

        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
        evt.preventDefault();
        canvas.addEventListener('mousemove', mouseMove, false);
    });

    // EVENEMENT DE FIN DU DESSIN DANS LE CANVAS
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', mouseMove, false);
    }, false);


    //////////////////////////////////////////////////////////////////////////
    // RECOMMENCER LE DESSIN DU DÉBUT
    //////////////////////////////////////////////////////////////////////////

    recommencer.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, false);

    //////////////////////////////////////////////////////////////////////////
    // CHANGER LA COULEUR DU TRACÉ
    //////////////////////////////////////////////////////////////////////////

    colors.forEach( color => {
        const colorName = document.querySelector(`#${color}`);
        colorName.addEventListener( 'click', (e) => {
            // if ( !colorName.classList.contains('selected') ){
            // } else if ( colorName.classList.contains('selected') ) {
            //     console.log(`On doit supprimer la classe selected des autres éléments`);
            //
            // }

            // ENLEVER LA CLASS SELECTED DE LA GOMME SI ELLE EST PRESENTE
            if ( eraser.classList.contains('selected') ) {
                eraser.classList.remove('selected');
            }

            if ( colorName.classList.contains('selected') ) {
                console.log(`La couleur ${colorName.id} a la classe selected`);
                colorName.classList.remove('selected');
            } else if ( !colorName.classList.contains('selected') ) {
                console.log(`La couleur ${colorName.id} n'a pas la classe selected`);
                colorName.classList.add('selected');
                switch ( color ) {
                    case 'noir':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = noir;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'cauchemar':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = cauchemar;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'concomitant':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = concomitant;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'creatif':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = creatif;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'actualite':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = actualite;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'recurrent':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = recurrent;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'sexuel':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = sexuel;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        ;
                        break;
                    case 'premonitoire':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = premonitoire;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        removeSelectedClassOnColor();
                        break;
                    case 'lucide':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.strokeStyle = lucide;
                        colorName.classList.add('selected');
                        console.log(`La couleur ${colorName.id} à la classe selected`);

                        removeSelectedClassOnColor();
                        break;
                    default:
                        break;
                }

                const selectedColors = document.querySelectorAll('.selected');
                selectedColors.forEach( selected => {
                    const selectedColorElement = selected.classList.contains('color');
                    if ( selectedColorElement ) {
                        console.log(`La couleur qui a déjà la classe selected est ${selectedColorElement.id}`);
                    }
                    colorName.classList.remove('selected');
                });

            }
        }, false);
    });

    //////////////////////////////////////////////////////////////////////////
    // Eraser
    //////////////////////////////////////////////////////////////////////////

        eraser.addEventListener( 'click', (e) => {
            ctx.globalCompositeOperation = 'destination-out';
            eraser.classList.toggle('selected');

            if ( eraser.classList.contains('selected') ) {

                // ENLEVER LA CLASS SELECTED DES COULEURS SI ON SELECTIONNE LA GOMME
                let colors = document.querySelectorAll('.color');
                colors.forEach( color => {
                    const colorSelected = color.classList.contains('selected');
                    if ( colorSelected ) {
                        console.log(`La couleur ${color.id} est sélectionné et on veut lui enlever sa classe selected`);
                        color.classList.remove('selected');
                    } else {
                        // Silence is golden.
                    }
                });

                // CHANGER LE CANVAS DE CURSOR
                canvas.style.cursor = 'pointer';

            } else {
                // Silence is golden
            }
        });

    //////////////////////////////////////////////////////////////////////////
    // Download
    //////////////////////////////////////////////////////////////////////////



        document.getElementById('upload-button').addEventListener('click', () => {
            let image = canvas.toDataURL("image/png");
            let imageDownloaded = this.href = image;

            dessinHTML = `
                    <div class="acf-field acf-field-dessin">
                        <div class="image-container">
                        </div>
                    </div>
                `;
            contenuTexte.insertAdjacentHTML('afterend', dessinHTML);

            // REVOIR DANS LE PROCESS GLOBAL SI C'EST UTILE
            if ( imageDownloaded ) {

                // ajoutImage(image);
                console.log(`On ajoute l'image dans le DOM`)
                // Creation de la zone du dessin
                let imageTag = document.createElement("img");
                let imageContainer = document.querySelector('.acf-field-dessin .image-container');
                imageTag.classList.add('dessin--termine');
                imageTag.setAttribute('id', 'dessin--termine');
                imageTag.setAttribute('src', image);
                imageContainer.appendChild(imageTag);

                var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                        var mutation = mutations[i];
                        switch(mutation.type) {
                            case 'childList':

                                if ( imageTag ) {
                                    console.log(`OH IL Y A DEJA UN IMAGE TAG`)
                                } else {
                                    console.log(`Ah bah nan en faite il n'y en a pas`);
                                }

                                // can't select the DESSIN button if sauvegarder
                                const dessinTermine = document.querySelector('#dessin--termine');
                                const boutonDessin = document.querySelector('.contenu--button-dessin');
                                if ( dessinTermine  ) {
                                    boutonDessin.style.pointerEvents = 'none';
                                }
                                // contenuDessin.appendChild( dessinHTML );
                                break;
                            default:
                        }
                    }
                });

                observer.observe(document, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    characterData: true
                });
                ajoutDessinToField(image, contenuDessin);
            }

            if ( wrapperDessin.classList.contains('-is-active') ) {
                wrapperDessin.classList.remove('-is-active');
            }

            contenuTexte.classList.add('as-drawing');
        });

    //////////////////////////////////////////////////////////////////////////
    // SHOW FIELD FOR EDIT IN SINGLE
    //////////////////////////////////////////////////////////////////////////
    const singleReve = document.querySelector('.single-reve');
    if ( singleReve ) {
        dessinHTML = `
                    <div class="acf-field acf-field-dessin">
                        <div class="image-container">
                        </div>
                        <div class="button--rounded contenu--button-dessin-edit"><span>Modifier son dessin</span></div>
                    </div>
                `;
        contenuTexte.insertAdjacentHTML('afterend', dessinHTML);

        if ( contenuDessin ) {
            const URLContenuDessin = JSON.stringify(contenuDessin.innerHTML);
            let editImageTag = document.createElement('img');
            let editImageContainer = document.querySelector('.acf-field-dessin .image-container');
            editImageTag.classList.add('dessin-to-edit');
            editImageTag.setAttribute('src', contenuDessin.innerHTML);
            editImageContainer.appendChild(editImageTag);

        }
    }


    //////////////////////////////////////////////////////////////////////////
    //
    //////////////////////////////////////////////////////////////////////////
    const editDessin = document.querySelector('.contenu--button-dessin-edit');
    if ( editDessin ) {

        editDessin.addEventListener('click', (e) => {
            console.log('on peut editer ou pas');
            if ( !wrapperDessin.classList.contains('-is-active') ) {
                wrapperDessin.classList.add('-is-active');
            } else {
                wrapperDessin.classList.remove('-is-active');
            }
        });
    }

    //////////////////////////////////////////////////////////////////////////
    // Range for size
    //////////////////////////////////////////////////////////////////////////
        const taille = document.querySelector('#taille');
    const tailleAffiche = document.querySelector(".taille--affiche");
    ctx.lineWidth = taille.value;

    taille.addEventListener("change", () => {
        setBubble(taille, tailleAffiche);
        ctx.lineWidth = taille.value;
    });
    setBubble(taille, tailleAffiche);

    let finalValue;

    function setBubble(taille, tailleAffiche) {
        const val = taille.value;
        const min = taille.min ? taille.min : 0;
        const max = taille.max ? taille.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        finalValue = tailleAffiche.innerHTML = val;

        // Sorta magic numbers based on size of the native UI thumb
        tailleAffiche.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
}

// FUNCTION POUR AJOUTER L'IMAGE DANS LE CONTAINER POUR AFFICHER LE DESSIN A L'UTILISATEUR
function ajoutImage(image){
    console.log(`On ajoute l'image dans le DOM`)
    // Creation de la zone du dessin
    let imageTag = document.createElement("img");
    let imageContainer = document.querySelector('.acf-field-dessin .image-container');
    imageTag.classList.add('dessin--termine');
    imageTag.setAttribute('id', 'dessin--termine');
    imageTag.setAttribute('src', image);
    imageContainer.appendChild(imageTag);
}

// FUNCTION POUR AJOUTER L'IMAGE DANS LE FIELD
function ajoutDessinToField(image, contenuDessin) {
    contenuDessin.value = image;
}


// Function pour enlever la classe selected quand on change de couleur
function removeSelectedClassOnColor(colorName) {

}
