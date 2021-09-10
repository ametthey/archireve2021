import { Isotope } from '../main.js';
import { Swiper } from '../main.js';

const pageBody = document.querySelector('.page-template-page-test');

jQuery(document).ready(function($) {


    if ( pageBody ) {

        // store filter for each group
        var filters = {};

        // init Isotope
        var $grid = new Isotope('.container-test-grid', {
            itemSelector: '.article-reve',
        });

        $('.container-test-filtres').on( 'click', '.button', function() {
            var $this = $(this);
            // get group key
            var $buttonGroup = $this.parents('.button-group');
            var filterGroup = $buttonGroup.attr('data-filter-group');
            // set filter for group
            filters[ filterGroup ] = $this.attr('data-filter');
            // combine filters
            var filterValue = concatValues( filters );
            $grid.arrange({ filter: filterValue });
            // arrange, and use filter fn
            // $grid.arrange();
        });

        // flatten object by concatting values
        function concatValues( obj ) {
            var value = '';
            for ( var prop in obj ) {
                value += obj[ prop ];
            }
            return value;
        }

        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                // ORIGINAL METHODS
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');

                // CUSTOM METHODS
                // $( this ).toggleClass( 'is-checked' );
            });
        });


        // Typologie slider
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
    }


});
