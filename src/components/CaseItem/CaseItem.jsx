import css from './CaseItem.module.css';
import { Carousel } from '../Carousel/Carousel.jsx';

export const CaseItem = ({ title, image, details }) => (
  <li className={css.case_item}>
    <Carousel>
      <img src={image} alt={title} className={`${css.image} image1`} />
      <img src={image} alt={title} className={`${css.image} image2`} />
    </Carousel>
    <div className={css.text_wrapper}>
      <h3 className={css.case_title}>{title}</h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index} className={css.details_item}>{detail}</li>
        ))}
      </ul>
    </div>
  </li>
);