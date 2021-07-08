import Isotope from 'isotope-layout';

Isotope.Item.prototype.layoutPosition = function() {
  this.emitEvent( 'layout', [ this ] );
};

var elem = document.querySelector('.content--home');
if ( elem ) {
    var iso = new Isotope( elem, {
        itemSelector: '.article-reve',
        layoutMode: 'vertical',
        // masonry: {
        // columnWidth: '.grid-item'
        // }
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
}

// CLICK TO FILTER THE CATEGORIES
var filtersElem = document.querySelector('.lucidite--container');
if ( filtersElem ) {
    filtersElem.addEventListener( 'click', function( event ) {
        var filterValue = event.target.getAttribute('data-filter');
        var filterValueItem = event.target;
        iso.arrange({ filter: filterValue });
    });
}

