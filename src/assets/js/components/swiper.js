// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const swiperContainers = document.querySelectorAll('.swiper-container');
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
let swiperDate = new Swiper( '.swiper-container-date', {
    // only way to swlide slide is by navigation
    // allowTouchMove: false,
    // centeredSlides: true,
    directon: 'horizontal',
    effect: 'slide',
    // loop: true,
    speed: 700,
    slidesPerView: 2,
    spaceBetween: 0,
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

