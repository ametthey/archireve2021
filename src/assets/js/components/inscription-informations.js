// RANGE
const allRanges = document.querySelectorAll('.container--range');
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");
    const rangeAge = wrap.querySelector('#age');

    console.log( rangeAge );

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);

});

let finalValue;

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    finalValue = bubble.innerHTML = val;
    console.log( finalValue );

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

// LANGUE - ADD ITEM
const langueButton = document.querySelector('#ajouter-langue');
const langueInput = document.querySelector('.questionnaire-langue-input');
const langueList = document.querySelector('.questionnaire-langue-list');

if ( langueButton ){
    langueButton.addEventListener( 'click', (e) => {
        e.preventDefault();

        const langueInputValue = langueInput.value.trim();

        const langueListItem = document.createElement('div');
        langueListItem.classList.add('questionnaire-langue-list-item');

        langueListItem.appendChild( document.createTextNode( langueInputValue ) );

        langueList.appendChild( langueListItem );

        langueInput.value = '';

    }, false);
}

// Verify if element is checked
const foiSpirituelItems = document.querySelectorAll('.radio--item input');
foiSpirituelItems.forEach( item => {
    // console.log(item);
    item.addEventListener( 'change', (e) => {
        // console.log( item.value );
        // if ( item.checked = true ) {
        //     console.log(`L'élément ${item.id.innerHTML} a été checké`);
        // } else if ( item.checked = false ) {
        //     console.log(`L'élément ${item.id.innerHTML} n'a pas été checké`);
        // }
    });
});

// Tooltip
// In Mobile, the hover is not working so we need to transform it into a click

const tooltipIcons = document.querySelectorAll('.questionnaire-categorie-tooltip');
tooltipIcons.forEach( tooltip => {
    const icon = tooltip.querySelector('.tooltip-icon');
    const text = tooltip.querySelector('.tooltip-text');

    if ( icon ) {

        // Click Event for Mobile
        icon.addEventListener( 'click', (e) => {
            e.preventDefault();
            text.classList.toggle( 'is-clicked' );
        });

        // Mouseenter (hover) for Desktop
        icon.addEventListener( 'mouseenter', (e) => {
            e.preventDefault();
            text.classList.add( 'is-clicked' );
        });

        // Mouseleave (hover) for Desktop
        icon.addEventListener( 'mouseleave', (e) => {
            e.preventDefault();
            text.classList.remove( 'is-clicked' );
        });
    }

});



/*
 * get range value
 */
const containerRanges = document.querySelectorAll( '.container--range' );
containerRanges.forEach( range => {
    const rangeInput = range.querySelector( '.range' );
    const rangeInputValue = range.querySelector( '.range' ).value;


    rangeInput.addEventListener( 'input', (e) => {
        // console.log(`les valeurs pour les range sonts ${rangeInputValue}`);
    });


});
