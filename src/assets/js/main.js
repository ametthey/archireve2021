import Isotope from 'isotope-layout';

import './components/helpers.js';

import './components/swiper.js';
import './components/left.js';
// import './components/right.js';
import './components/articles.js';
// import './components/apropos.js';
import './components/calendrier.js';
import './components/header.js';
///// import './components/click-to-select.js';

// Filtre de recherche
// Combination filtres isotope
// https://codepen.io/desandro/pen/owAyG/
import './components/filters-tag.js';
import './components/filters-tag-2.js';
import './components/filters-lucidite.js';
import './components/filters-typologie.js';
import './components/filters-dates.js';
import './components/calendar.js';
import './components/filters.js';

// Download as
// import './components/download.js';


import './components/letter-splitting.js';
import './components/inscription-informations.js';

import './components/nouveau-reve.js';

import './components/inscription.js';
import './components/back-office.js';

// import './components/acf.js';

// HWK
// import './components/hwk-scripts.js';

window.addEventListener('resize', () => {
    console.log( window.innerWidth );
});

export { Isotope };
