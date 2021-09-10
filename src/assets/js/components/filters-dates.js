import { Isotope } from '../main.js';
import { Swiper } from '../main.js';

function numberToDay(j) {
    return ('0' + j).slice(-2);
}

/*
 * Get the date
 */
let dateReve, dayReve, monthReve, formattedMonthReve, yearReve, monthYearReve, monthYearReveArray, titleReve, reveYears, calendrierYears ,filteredYearsToRemove;
const contentRight = document.querySelector('.content--right');
const reves = document.querySelectorAll('.article-reve');

if ( contentRight ) {

    // SWIPER
    let swiperDate = new Swiper( '.swiper-container-date', {
        // only way to swlide slide is by navigation
        allowTouchMove: false,
        // centeredSlides: true,
        directon: 'horizontal',
        effect: 'slide',
        // loop: true,
        speed: 700,
        // preventClicks: true,
        slidesPerView: 2,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-date-button-next',
            prevEl: '.swiper-date-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                // spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                // spaceBetween: 30
            },
        }

    });


    // ISOTOPE
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
                console.log(`On clique sur ${e.target.innerHTML} ${annee}`);
                const matchingDate = mois.dataset.filterDate;

                // mois.classList.toggle('-is-selected');

                reves.forEach( matchingReve => {
                    const matchingReveData = matchingReve.dataset.filterDate;

                    if ( matchingReveData === matchingDate ) {
                        const goodMatchingReveData = matchingReve;
                        goodMatchingReveData.classList.toggle('-match-date');

                        console.log( goodMatchingReveData );

                        // Add class to month
                        mois.classList.toggle( 'is-active' );
                        // mois.classList.toggle( '-is-selected' );
                        reves.forEach( hidingMatchingReve => {
                            if ( !hidingMatchingReve.classList.contains('-match-date') ) {
                                hidingMatchingReve.classList.toggle('-no-match-date');
                            } else if ( !mois.classList.contains('is-active') ) {
                                if( hidingMatchingReve.classList.contains('-match-date') ) {
                                    hidingMatchingReve.classList.remove('-no-match-date');
                                }
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
