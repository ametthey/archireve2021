// Barre de recherche
const luciditeContainer = document.querySelector('.lucidite--container');
const luciditeItems = luciditeContainer.querySelectorAll( '.lucidite--item' );

// Article
const articleReves = document.querySelectorAll('.article-reve');

// Barre de recherche
luciditeItems.forEach( item => {
});



// A transformer avec le selecteur comme parametre
const FilterLuciditeElements = document.querySelectorAll('.lucidite--container .lucidite--item');
if ( FilterLuciditeElements ){
    FilterLuciditeElements.forEach( element => {
        element.addEventListener( 'click', (element) => {
            const theElement = element.currentTarget;
            theElement.classList.toggle('-is-selected');

            // Recuperer le niveau de lucidite du bouton
            const theElementLucidite = theElement.classList[0];

            if ( theElement.classList.contains('-is-selected') ) {
                console.log(`On vient de cliquer sur un des boutons avec un type de niveau de lucidité,
                le niveau est ${theElementLucidite}`);
                // Article
                articleReves.forEach( reve => {
                    const articleLucidite = reve.querySelector('.rounded--lucidite').classList[0];

                    if ( theElementLucidite === articleLucidite ) {
                        // console.log(`On a la même classe et c'est ${theElementLucidite}`);
                        reve.classList.add('reve-lucidite-selected');

                        const articleRevesNotSelected = document.querySelectorAll('.article-reve');
                        articleRevesNotSelected.forEach( articleReveNotSelected => {
                            if ( !articleReveNotSelected.classList.contains('reve-lucidite-selected') ) {
                                articleReveNotSelected.classList.add('reve-lucidite-not-selected');
                            } else {
                                articleReveNotSelected.classList.remove('reve-lucidite-not-selected');
                            }

                            // PROBLEME QUAND ON A PLUSIEURS ELEMENTS SELECTIONNER, DES QU'ON RECLIQUE ÇA ENLEVE TOUT
                            // if ( !theElement.classList.contains('-is-selected')) {
                            //     articleReveNotSelected.classList.remove('reve-lucidite-not-selected');
                            //     articleReveNotSelected.classList.remove('reve-lucidite-selected');
                            // }
                        });
                    } else {

                    }
                });
            } else if ( !theElement.classList.contains('-is-selected') ) {
                console.log(`On vient de cliquer encore une fois sur un des boutons pour le déselectionner, du coup le type de niveau de lucidité ${theElementLucidite} n'est plus actif`);

                // Si l'article correspondant avait aussi la classe reve-lucidite-selected, alors il faut l'enlever
                articleReves.forEach( reve => {
                    const articleLucidite = reve.querySelector('.rounded--lucidite').classList[0];

                    if ( theElementLucidite == articleLucidite ) {
                        console.log(`On a donc déselectionner et on doit refaire apparaitre les autres`);

                        const articleRevesNotSelected = document.querySelectorAll('.article-reve');
                        articleRevesNotSelected.forEach( articleReveNotSelected => {
                            // Quand on déclique sur le bouton avec la lucidite, alors changer aussi l'article correspondant
                            if ( articleReveNotSelected.classList.contains('reve-lucidite-not-selected') ) {
                                articleReveNotSelected.classList.remove('reve-lucidite-not-selected');
                            }
                        });
                    }
                });

            }


        }, { passive: true } )
    });
}




