// CLICK TO COLLAPSE ARTICLE
const articles = document.querySelectorAll('.article-reve');

articles.forEach( article => {
    const articleHeader = article.querySelector('.article-reve--header h1');
    const articleTexte = article.querySelector('.article-reve--text');
    const articleTaxonomies = article.querySelector('.article-reve--taxonomies');

    // collapse for show/hide content of article
    articleHeader.addEventListener( 'click' , function() {

        if ( articleTexte.classList.contains('-is-active') ) {
            console.log(`la classe active est la `);

            const activeElements = Array.from(document.querySelectorAll('.-is-active'));
            activeElements.forEach(activeElement => {
                const activeText = activeElement.classList.contains('article-reve--text');
                if ( activeText ) {
                    const theActiveText = activeElement;
                    if ( theActiveText.style.maxHeight ) {
                        theActiveText.style.maxHeight  = null;
                    }
                }
                activeElement.classList.remove('-is-active');
            });

            articleHeader.classList.remove('-is-active');
            articleTexte.classList.remove('-is-active');
            articleTaxonomies.classList.remove('-is-active');

            if (articleTexte.style.maxHeight){
                articleTexte.style.maxHeight = null;
            }

        } else if( !articleTexte.classList.contains('-is-active') ) {
            console.log(`la classe active n'est pas la `);

            const activeElements = Array.from(document.querySelectorAll('.-is-active'));
            activeElements.forEach(activeElement => {
                const activeText = activeElement.classList.contains('article-reve--text');
                if ( activeText ) {
                    const theActiveText = activeElement;
                    if ( theActiveText.style.maxHeight ) {
                        theActiveText.style.maxHeight  = null;
                    }
                }
                activeElement.classList.remove('-is-active');
            });

            articleHeader.classList.add('-is-active');
            articleTexte.classList.add('-is-active');
            articleTaxonomies.classList.add('-is-active');

            articleTexte.style.maxHeight = articleTexte.scrollHeight + "px";
        }
    });

});
