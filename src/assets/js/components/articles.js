// CLICK TO COLLAPSE ARTICLE
const articles = document.querySelectorAll('.article-reve');

articles.forEach( article => {
    const articleHeader = article.querySelector('.article-reve--header h1');
    const articleTexte = article.querySelector('.article-reve--text');
    const articleTaxonomies = article.querySelector('.article-reve--taxonomies');
    const articleDownload = article.querySelector('.article-reve--download');

    // collapse for show/hide content of article
    articleHeader.addEventListener( 'click' , function() {
        articleHeader.classList.toggle( '-is-active' );
        articleTexte.classList.toggle( '-is-active' );
        articleTaxonomies.classList.toggle( '-is-active' );
        if (articleTexte.style.maxHeight){
            articleTexte.style.maxHeight = null;
        } else {
            articleTexte.style.maxHeight = articleTexte.scrollHeight + "px";
        }
    });
});
