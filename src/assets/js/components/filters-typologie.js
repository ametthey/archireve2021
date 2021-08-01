import { Isotope } from '../main.js';
import { Swiper } from '../main.js';

const contentHome = document.querySelector('.content--home');
jQuery(document).ready(function($) {
    if ( contentHome ) {

        // SWIPER
        let swiperTypologie = new Swiper( '.swiper-container-typologie', {
            // only way to swlide slide is by navigation
            // allowTouchMove: false,
            // centeredSlides: true,
            directon: 'horizontal',
            effect: 'slide',
            // loop: true,
            speed: 700,
            slidesPerView: 3,
            spaceBetween: 0,
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-typologie-button-next',
                prevEl: '.swiper-typologie-button-prev',
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
    }
});
