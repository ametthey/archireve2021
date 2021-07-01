// let api = '/wp-json/wp/v2/reve/';
let api = '/wp-json/wp/v2/taxonomies/';
let acf = '/wp-json/acf/v3';
// let typologie = '/wp-json/acf/v3/niveaudetypologie';
let typologie = '/wp-json/acf/v3/typologie';
let listReves = {};
let listTypologie = {};

const home = document.querySelector('.page-template-page-home');

/******************************************************************
 *
 *  Fetch Call to WordPress CPT Endpoint project
 *
 *****************************************************************/



// REST API call to render HTML
listReves.init = () => {
    // Endpoit to CPT project
    fetch( api )
    // fetch( acf )
        .then( response => {
            if ( response.status !== 200 ) {
                console.log(`Problème ! Le status du code est ${response.status}`)
                return;
            } else {
                // Fetch API to get posts
                response.json().then( (reves) => {
                    console.log(reves);
                    // renderForDownload(reves);
                });
            }
        })
        .catch( error => {
            console.log(`Error: ${error}`);
        })
};

listTypologie.init = () => {
    // Endpoit to CPT project
    fetch( typologie )
    // fetch( acf )
        .then( response => {
            if ( response.status !== 200 ) {
                console.log(`Problème ! Le status du code est ${response.status}`)
                return;
            } else {
                // Fetch API to get posts
                response.json().then( (typologies) => {
                    console.log(typologies);
                });
            }
        })
        .catch( error => {
            console.log(`Error: ${error}`);
        })
};

if ( home ) {
    // Initiate the function ListPosts
    listReves.init();
    listTypologie.init();
} else {
    console.log(`You're not at home, continue your Journey`);
}

function renderForDownload(reves) {
    reves.forEach( reve => {
        let titre, niveauDeLucidite, tag, typologieDeReve, date, contenu;
        titre = reve.acf.titre_du_reve;
        niveauDeLucidite = reve.acf.niveau_de_typologie;
        tag = reve.acf.tag;
        typologieDeReve = reve.acf.typologie_de_reve;
        console.log( `
            le titre est ${titre}
            le niveau de Lucidite est ${niveauDeLucidite}
            les tags sont ${tag}
            les typologies de reves sont ${typologieDeReve}
        ` );
    });
}
