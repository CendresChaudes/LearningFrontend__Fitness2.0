import Swiper from '../../vendor/swiper';

const sliderList = document.querySelector('.coaches .slider__list');
const sliderItems = document.querySelectorAll('.coaches .slider__item');

const duplicateSlides = () => sliderList.append(...Array.from(sliderItems).map((item) => item.cloneNode(true)));

const initCoachesSlider = () => {
  duplicateSlides();

  const swiper = new Swiper('.coaches__slider-wrapper', {
    grabCursor: true,
    loop: true,
    speed: 600,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 162,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 107,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      prevEl: '#prev-coach-button',
      nextEl: '#next-coach-button',
    },
  });
};

export {initCoachesSlider};
