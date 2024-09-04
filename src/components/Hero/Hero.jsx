import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Сайти, що втілюють ваші ідеї</h1>
        <p className={css.text}>Ми спеціалізуємося на розробці, що поєднує передові технології та експертизи</p>
      </div>
    </section>
  )
}