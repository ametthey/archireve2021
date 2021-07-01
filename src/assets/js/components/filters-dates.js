import { Isotope } from '../main.js';
import { numberToDay } from '../components/helpers';

/*
 * Get the date
 */
let dateReve, dayReve, monthReve, formattedMonthReve, yearReve, monthYearReve, monthYearReveArray, titleReve, reveYears, calendrierYears ,filteredYearsToRemove;
const home = document.querySelector('.content--home');
const reves = document.querySelectorAll('.article-reve');

if ( home ) {

    // Empty Array to store Year from Reves
    reveYears = [];
    monthYearReveArray = [];

    // Get Dates from Reves
    reves.forEach( reve => {
        dateReve = reve.querySelector('.article-header-date').textContent;
        dayReve = dateReve.slice(0, 2);
        monthReve = dateReve.slice(3, 5);
        formattedMonthReve = numberToDay( parseInt(monthReve) );
        yearReve = dateReve.slice(6, 10);
        monthYearReve = formattedMonthReve + parseInt(yearReve);

        // Add data-attribute for matching dates
        reve.dataset.filterDate += monthYearReve;

        // Create array from each reve year
        reveYears.push( parseInt(yearReve) );

        // Create array from each calendar year
        calendrierYears = [];
        const calendrierItemTitles = [...document.querySelectorAll('.calendrier--item')];
        calendrierItemTitles.forEach( title => {
            const titleDate = parseInt(title.querySelector('h4').textContent);
            calendrierYears.push( titleDate );
        });

        // Create array from month and year
        monthYearReveArray.push( parseInt( monthYearReve ) );

    });


    // Années présentes dans les articles
    // https://stackoverflow.com/questions/45599749/using-filter-to-compare-two-arrays-and-return-values-that-arent-matched
    filteredYearsToRemove = calendrierYears.filter( (year) => !reveYears.includes(year) );

    // filter par la date
    clickTheDay( monthReve, yearReve );

}

/*
 * Clicked on the day to filter the reves
 * @param {Number} the month of the reve
 * @param {Number} the year of the reve
 */
function clickTheDay(monthReve, yearReve) {
    // GET THE DAY AND THE MONTH
    const containersDuMois = document.querySelectorAll('.calendrier--mois');
    containersDuMois.forEach( container => {
        const annee = container.previousElementSibling.textContent;
        const moisIndividuel = container.querySelectorAll('.mois--item');
        moisIndividuel.forEach( mois => {

            // Click on the date
            mois.addEventListener( 'click', (e) => {
                const matchingDate = mois.dataset.filterDate;


                reves.forEach( matchingReve => {
                    const matchingReveData = matchingReve.dataset.filterDate;

                    if ( matchingReveData === matchingDate ) {
                        const goodMatchingReveData = matchingReve;
                        goodMatchingReveData.classList.toggle('-match-date');

                        // Add class to month
                        mois.classList.toggle( 'is-active' );
                        reves.forEach( hidingMatchingReve => {
                            if ( !hidingMatchingReve.classList.contains('-match-date') ) {
                                hidingMatchingReve.classList.toggle('-no-match-date');
                            }
                        });
                    }
                    // else if ( matchingReveData !== matchingDate ) {
                    //     console.log( matchingDate );
                    //     matchingReve.classList.toggle('-leave-match-date');
                    // }
                    // else {
                    //     const notGoodMatchingReveData = matchingReve;
                    //     notGoodMatchingReveData.classList.toggle('-no-match-date');
                    // }
                });

            });
        });
    });
}

export { reveYears };
