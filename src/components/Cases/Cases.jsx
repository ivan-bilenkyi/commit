import css from './Cases.module.css';
import { CaseItem } from '../CaseItem/CaseItem.jsx';
import { data } from '../../data.js';

export const Cases = () => {
  const caseData = [data.sites, data.store];

  return (
    <section className={css.section}>
      <div className={css.top_wrapper}>
        <p className={css.subtitle}>кейси</p>
        <h2 className={css.title}>Реалізовані ідеї наших клієнтів</h2>
        <p className={css.subtext}>
          Мрія створювати індивідуальні рішення, надаючи можливість реалізувати потенціал у цифровому світі, втілилась в наших кейсах. Ми віримо, що кожен бізнес унікальний, і допомагаємо розкрити це через вебсайти та онлайн-платформи.
        </p>
      </div>

      <ul className={css.case_list}>
        {caseData.map((item, index) => (
          <CaseItem key={index} title={item.title} image={item.image} details={item.details} />
        ))}
      </ul>
    </section>
  );
};
