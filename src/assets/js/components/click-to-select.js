// Ecriture de la fonction avec un sélecteur arbitraire

// SÉLECTION DU TYPE DE RÊVE
const FilterTypologieElements = document.querySelectorAll('.typopologie--container .typologie--item');
if ( FilterTypologieElements ){
    FilterTypologieElements.forEach( element => {
        element.addEventListener( 'click', (element) => {
            const theElement = element.currentTarget;
            theElement.classList.toggle('-is-selected');
        }, { passive: true } )
    });
}

// SÉLECTION DU CALENDRIER
const FilterCalendrierElements = document.querySelectorAll('.calendrier--container .mois--item');
if ( FilterCalendrierElements ){
    FilterCalendrierElements.forEach( element => {
        element.addEventListener( 'click', (element) => {
            const theElement = element.currentTarget;
            theElement.classList.toggle('-is-selected');
        }, { passive: true } )
    });
}

// TÉLÉCHARGER LES RÊVES
const buttonTelechargerReve = document.querySelector('.button--download');
if ( buttonTelechargerReve ){
    buttonTelechargerReve.addEventListener( 'click', (e) => {
        buttonTelechargerReve.classList.toggle('-is-selected');
    }, { passive: true });
}

// TOUT SÉLECTIONNER
const buttonToutSelectionner = document.querySelector('.button--select');
if ( buttonToutSelectionner ){
    buttonToutSelectionner.addEventListener( 'click', (e) => {
        buttonToutSelectionner.classList.toggle('-is-selected');
    }, { passive: true });
}

