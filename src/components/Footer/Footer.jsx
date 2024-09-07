import css from './Footer.module.css'
import sprite from '../../assets/icons/sprite.svg';

export const Footer = () => {
  return (
    <section className={css.footer} id="footer">
      <div className={css.info_wrapper}>
        <div className={css.wrapper}>
          <h2 className={css.footer_title}>COMMIT</h2>
          <h3 className={css.subtitle}>Комітимо мрії в реальність</h3>
        </div>
        <div className={css.wrapper}>
          <h3 className={css.top_title}>Адреса</h3>
          <p>
            Київ, Україна <br />
            ТЦ Мармелад, вул. Борщагівськa <br />
            154, офіс / блок 4-5
          </p>
        </div>
        <div className={css.wrapper}>
          <h3 className={css.top_title}>Телефони</h3>
          <ul>
            <li>+38 098-001-39-39</li>
            <li>+38 093-001-39-39</li>
            <li>+38 066-001-39-39</li>
          </ul>
        </div>
        <div className={css.wrapper}>
          <h3 className={css.top_title}>Контакти</h3>
          <ul>
            <li>Email <span>gmail</span></li>
            <li>Telegram <span>sales</span></li>
            <li>Viber <span>sales</span></li>
          </ul>
        </div>
      </div>
      <div className={css.social_wrapper}>
        <p>Copyright © 2022 BRIX Templates | All Rights Reserved </p>
        <ul className={css.social_list}>
          <li>
            <a href="#">
              <svg className={css.icon}>
                <use href={`${sprite}#linkedin`} />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={css.icon}>
                <use href={`${sprite}#instagram`} />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={css.icon}>
                <use href={`${sprite}#facebook`} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}