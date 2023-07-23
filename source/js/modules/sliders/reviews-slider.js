import Swiper from '../../vendor/swiper';

const sliderList = document.querySelector('.reviews .slider__list');
const sliderItems = document.querySelectorAll('.reviews .slider__item');

const duplicateSlides = () => sliderList.append(...Array.from(sliderItems).map((item) => item.cloneNode(true)));

const initReviewsSlider = () => {
  duplicateSlides();

  const swiper = new Swiper('.reviews__slider-wrapper', {
    grabCursor: true,
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 50,

    navigation: {
      prevEl: '#prev-review-button',
      nextEl: '#next-review-button',
    },
  });
};

export {initReviewsSlider};
