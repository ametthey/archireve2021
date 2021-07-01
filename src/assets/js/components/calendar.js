import { reveYears } from '../components//filters-dates';
import { numberToDay } from '../components/helpers';

/*
 * Generate number for each month in data-for-isotope
 */
const calendriers = document.querySelectorAll('.calendrier--item')
calendriers.forEach( calendar => {
    const yearNumeroDuMois = calendar.querySelector('h4').textContent;
    const containersDuMois = calendar.querySelectorAll('.calendrier--mois');
    containersDuMois.forEach( container => {
        let debut = 1;
        const numeroDuMois = calendar.querySelectorAll('.mois--item');
        numeroDuMois.forEach( number => {
            number.dataset.forIsotope += debut;
            number.dataset.filterDate += numberToDay(debut) + yearNumeroDuMois;
            debut++;
        });
    });
});
