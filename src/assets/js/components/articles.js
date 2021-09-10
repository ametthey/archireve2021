import $ from "jquery";
import 'jquery.marquee';

// CLICK TO COLLAPSE ARTICLE
const articles = document.querySelectorAll('.article-reve');

articles.forEach( article => {
    const articleHeader = article.querySelector('.article-reve--header h1');
    const articleTexte = article.querySelector('.article-reve--text');
    const articleTaxonomies = article.querySelector('.article-reve--taxonomies');

    // COLLAPSE FOR SHOW/HIDE CONTENT OF ARTICLE
    articleHeader.addEventListener( 'click' , function() {

        if ( articleTexte.classList.contains('-is-active') ) {
            articleHeader.classList.remove('-is-active');
            articleTexte.classList.remove('-is-active');
            articleTaxonomies.classList.remove('-is-active');

            if (articleTexte.style.maxHeight){
                articleTexte.style.maxHeight = null;
            }

        } else if( !articleTexte.classList.contains('-is-active') ) {
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

// MICRO INTERACTION
const sections = [...document.querySelectorAll('.article-reve')]
const options = {
    rootMargin: '0px',
    threshold: 1
}

const callback = (entries) => {
    entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.75) {
            // if (entry.isIntersecting) {
            target.classList.add("is-visible");

        } else {
            // target.classList.remove("is-visible");
        }
    })
}
const observer = new IntersectionObserver(callback, options)
sections.forEach((section, index) => {
    observer.observe(section)
})

// MARQUEE POUR LES IMAGES DES TYPOLOGIES
const iconesContainer = document.querySelectorAll('.article-taxonomies--typologie');
window.addEventListener('DOMContentLoaded', (e) => {
    iconesContainer.forEach( icone => {
        $(icone).marquee({
            //speed in milliseconds of the marquee
            duration: 1400,
            //gap in pixels between the tickers
            gap: 5,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 1000,
            //'left' or 'right'
            direction: 'up',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true,
            pauseOnHover: true,
        });
    });
});
