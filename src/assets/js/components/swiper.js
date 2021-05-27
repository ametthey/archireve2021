// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const swiperContainers = document.querySelectorAll('.swiper-container');

swiperContainers.forEach( container => {
    let swiperSettings = {
        directon: 'horizontal',
        effect: 'slide',
        loop: true,
        speed: 700,
        slidesPerView: 2,
        spaceBetwee: 0,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    };
    let MySwiper = new Swiper( container, swiperSettings  );
});

