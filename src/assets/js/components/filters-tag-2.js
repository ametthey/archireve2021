import { Isotope } from '../main.js';

// Search bar
const contentHome = document.querySelector('.content--home');
jQuery(document).ready(function($) {
    if ( contentHome ) {
        // Tags
        var $containerTag2 = new Isotope( '.content--home', {
            itemSelector: '.article-reve',
            layoutMode: 'vertical',
            // Animation part
            stagger: 30,
            transitionDuration: 0,
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        });

        // filter with selects and checkboxesTag
        var $tagElements = $('.tagitems--container');
        $tagElements.on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            // filterValue = filterFns[ filterValue ] || filterValue;
            $containerTag2.arrange({ filter: filterValue });

            console.log( filterValue );
        });
    }

});


