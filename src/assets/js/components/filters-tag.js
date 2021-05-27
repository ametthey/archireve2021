// BARRE DE RECHERCHE POUR LES TAGS
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
// 1/ https://www.youtube.com/watch?v=G1eW3Oi6uoc
const tagSearch = document.querySelector('.tagsearch');
tagSearch.addEventListener( 'keyup' , filterTags )

function filterTags(e) {
    e.preventDefault();
    // Get values of tags
    let filterTagsValue = document.querySelector('.tagsearch').value.toUpperCase();

    // Get names of tags
    let articleTagNames = document.querySelectorAll( '.article-taxonomies--tag' );

    articleTagNames.forEach( tagContainer => {
        const tagItems = tagContainer.querySelectorAll('.button--squared p');

        [...tagItems].filter( element => {
            const filterTag = element.innerHTML.toUpperCase().includes( filterTagsValue );
            const filterTagNoTag = element.innerHTML.toUpperCase().includes( filterTagsValue ) && element.innerHTML.toUpperCase().includes( false );
            const taxonomiesContainer = element.closest('.article-reve--taxonomies');
            const reveContainer = taxonomiesContainer.closest('.article-reve');

            // Si container a le tag correspondant
            if ( filterTag ) {
                console.log(`le mot trouvé est ${filterTagsValue} et son container est ${reveContainer.id}`);
                element.style.color = '#f00';
            } else if ( filterTagNoTag ){
                // console.log(`le container des mots est ${reveContainer.id}`);
                // si le container n'a pas de mot trouvé, dégage
                // 3 - si pas de mot trouvé, cacher le container
                console.log(`What is going on`);
            }
            else {
                console.log(`le mot n'a pas été trouvé et son container est ${reveContainer.id}`);
            }
        });
    });
}
