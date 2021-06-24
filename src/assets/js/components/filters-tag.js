import { Isotope } from '../main.js';

// Search bar
jQuery(document).ready(function($) {
    // quick search regex
    var qsRegex;

    // init Isotope
    var $containerTag = new Isotope( '.content--home', {
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
        },
        filter: function() {
            return qsRegex ? $(this).text().match( qsRegex ) : true;
        }
    });


    // use value of search field to filter
    var $quicksearch = $('.tagsearch').keyup( debounce( function() {
        qsRegex = new RegExp( $quicksearch.val(), 'gi' );
        $containerTag.arrange();
    }, 200 ) );

    // debounce so filtering doesn't happen every millisecond
    function debounce( fn, threshold ) {
        var timeout;
        threshold = threshold || 100;
        return function debounced() {
            clearTimeout( timeout );
            var args = arguments;
            var _this = this;
            function delayed() {
                fn.apply( _this, args );
            }
            timeout = setTimeout( delayed, threshold );
        };
    }
});


