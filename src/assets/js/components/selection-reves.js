// Ajouter à la pastille le nombre de rêve sélectionné
const elementsSelected = document.querySelectorAll('.button--select-to-download');
const pastille = document.querySelector('.button--selected-number');
let COUNT = 0;

if ( elementsSelected && pastille ) {
const pastilleText = pastille.querySelector('p');
    elementsSelected.forEach( element => {
        const iconText = element.nextElementSibling ;
        // Click sur le bouton de téléchargement
        element.addEventListener( 'click', (e) => {
            const elementTarget = e.target;

            // Change le background du bouton de téléchargement
            elementTarget.classList.toggle('-is-selected');
            iconText.classList.toggle('is-selected');

            // Incremente le nombre de rêve sélectionné
            if ( elementTarget.classList.contains('-is-selected') ) {
                // Mintre la pastille si le nombre est nul
                pastille.classList.add('is-visible');
                COUNT++;
                pastilleText.innerHTML = COUNT;

                // Decrement le nombre de rêve sélectionné
            } else if ( !elementTarget.classList.contains('-is-selected') ){
                COUNT--;
                pastilleText.innerHTML = COUNT;
            }

            // Enleve la pastille si le nombre est nul
            if ( COUNT === 0 ) {
                pastille.classList.remove('is-visible');
            }
        });
    });

    // SELECTION DE TOUT LES RÊVES
    const selectAll = document.querySelector('.button--select');
    selectAll.addEventListener( 'click', (e) => {

        // Ajout des différentes classes pour montrer l'état de sélection
        selectAll.classList.toggle('-is-selected');
        pastille.classList.toggle('is-visible');
        elementsSelected.forEach(element => element.classList.toggle('-is-selected'));

        // Ajout du nombre de rêve dans la pastille
        pastilleText.innerHTML = elementsSelected.length;
    });
}
