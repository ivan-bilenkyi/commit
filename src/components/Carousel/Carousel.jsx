import { useState } from 'react';
import css from './Carousel.module.css';
import sprite from '../../assets/icons/sprite.svg';

export const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < children.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className={css.image_wrapper}>
      <div className={css.window}>
        <div
          className={css.image_container}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {children}
        </div>
      </div>
      <div className={css.arrow_wrapper}>
        <button
          className={css.arrow}
          onClick={handleLeftArrowClick}
          disabled={currentIndex === 0} // Блокуємо ліву кнопку на першому слайді
        >
          <svg className={css.icon}>
            <use href={`${sprite}#left`} />
          </svg>
        </button>
        <button
          className={css.arrow}
          onClick={handleRightArrowClick}
          disabled={currentIndex === children.length - 1} // Блокуємо праву кнопку на останньому слайді
        >
          <svg className={css.icon}>
            <use href={`${sprite}#right`} />
          </svg>
        </button>
      </div>
    </div>
  );
};
