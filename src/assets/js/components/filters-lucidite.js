import Isotope from 'isotope-layout';

// Checkboxes
jQuery(document).ready(function($) {
    // Code that uses jQuery's $ can follow here.
    // init Isotope
    var $container = new Isotope( '.content--home', {
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

    var $output = $('#output');

    // filter with selects and checkboxes
    var $checkboxes = $('.lucidite--container input');

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

        $container.arrange({ filter: filterValue })
    });
});
