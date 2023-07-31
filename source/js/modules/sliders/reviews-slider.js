import Swiper from '../../vendor/swiper';

const sectionClassName = 'reviews';
const reviewsContainer = document.querySelector(`.${sectionClassName}`);

const initReviewsSlider = () => {
  if (reviewsContainer) {
    return new Swiper(`[data-slider-wrapper="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 50,

      navigation: {
        prevEl: `[data-slider-prev-button="${sectionClassName}"]`,
        nextEl: `[data-slider-next-button="${sectionClassName}"]`,
      },
    });
  }

  return null;
};

export {initReviewsSlider};
