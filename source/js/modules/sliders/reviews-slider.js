import Swiper from '../../vendor/swiper';

const initReviewsSlider = () => {
  const swiper = new Swiper('.slider', {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 1000,
    speed: 600,

    navigation: {
      prevEl: '#prev-review-button',
      nextEl: '#next-review-button',
    },
  });
};

export {initReviewsSlider};
