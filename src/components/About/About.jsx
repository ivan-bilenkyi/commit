import css from './About.module.css'
import image from '../../assets/images/builder.png'

export const About = () => {
  return (
    <section className={css.section} id="about">
      <div className={css.top_wrapper}>
        <p className={css.subtitle}>Про нас</p>
        <h2 className={css.title}>Індивідуальний підхід та гнучкість для створення цифрових рішень</h2>
        <p className={css.subtext}>Наша команда працює над тим, щоб кожне рішення було максимально адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача.</p>
      </div>
      <div className={css.wrapper}>
        <div className={css.image_wrapper}>
          <img className={css.image} src={image} alt='майстер на червоному фоні'/>
        </div>
        <ul className={css.list}>
          <li className={css.item_image_wrapper}>
            <img className={css.item_image} src={image} alt="руки" />
          </li>
          <li className={`${css.item} ${css.item1}`}>
            <span>1250+</span>
            <p>виконаних проектів</p>
          </li>
          <li className={`${css.item} ${css.item2}`}>
            <span>10mln+</span>
            <p>рядків коду</p>
          </li>
          <li className={`${css.item} ${css.item3}`}>
            <span>99%</span>
            <p>задоволених клієнтів</p>
          </li>
          <li className={`${css.item} ${css.item4}`}>
            <span>85%</span>
            <p>зростання бізнесу</p>
          </li>
        </ul>

      </div>
    </section>
  )
}