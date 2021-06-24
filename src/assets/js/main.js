import Isotope from 'isotope-layout';

import './components/swiper.js';
// import './components/left.js';
///// import './components/click-to-select.js';
// import './components/right.js';
import './components/articles.js';
// import './components/apropos.js';
import './components/calendrier.js';
import './components/header.js';

// Filtre de recherche
import './components/filters-tag.js';
import './components/filters-tag-2.js';
import './components/filters-lucidite.js';
import './components/filters-typologie.js';
import './components/filters.js';

import './components/letter-splitting.js';
import './components/inscription-informations.js';

import './components/nouveau-reve.js';

// HWK
// import './components/hwk-scripts.js';

window.addEventListener('resize', () => {
    console.log( window.innerWidth );
});

export { Isotope };
