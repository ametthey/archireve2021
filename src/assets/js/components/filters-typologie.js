import { Isotope } from '../main.js';

// Checkboxes
jQuery(document).ready(function($) {
    // Code that uses jQuery's $ can follow here.
    // init Isotope
    var $containerTypologie = new Isotope( '.content--home', {
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

    // filter with selects and checkboxes
    var $checkboxes = $('.swiper-wrapper .typologie--label-input');

    $checkboxes.change( function() {
        // map input values to an array
        var inclusives = [];
        // inclusive filters from checkboxes
        $checkboxes.each( function( i, elem ) {
            // if checkbox, use value if checked
            if ( elem.checked ) {
                inclusives.push( elem.value );
                elem.classList.add('checkbox--is-selected');
            } else {
                elem.classList.remove('checkbox--is-selected');
            }
        });

        // combine inclusive filters
        var filterValue = inclusives.length ? inclusives.join(', ') : '*';

        $containerTypologie.arrange({ filter: filterValue })

        console.log( filterValue );
    });
});
