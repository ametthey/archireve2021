// CLICK TO COLLAPSE ARTICLE
const articles = document.querySelectorAll('.article-reve');

articles.forEach( article => {
    const articleHeader = article.querySelector('.article-reve--header h1');
    const articleTexte = article.querySelector('.article-reve--text');
    const articleTaxonomies = article.querySelector('.article-reve--taxonomies');
    const articleDownload = article.querySelector('.button--select-to-download');

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


    // select the dream for downloading
    articleDownload.addEventListener( 'click', function(e) {
        const theArticle = articleDownload.closest('.article-reve');
        const theArticleAuthor = articleDownload.closest('.article-header--author-and-date')





        articleDownload .classList.toggle( 'is-selected' );
        console.log(theArticle);
    });

});
