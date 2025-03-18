import classes from './filterSection.module.scss';

export const FilterSection = () => {
  return (
    <div className={classes.filterSection}>
      <select name="year" id="year">
        <option value="">Год выпуска</option>
        <option value="2025">до текущего</option>
        <option value="2020">до 2020</option>
        <option value="2010">до 2010</option>
        <option value="2000">до 2000</option>
      </select>
      <select name="model" id="model">
        <option value="">Модель</option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
      </select>
      <select name="part" id="part">
        <option value="">Кузов</option>
        <option value="Седан">Седан</option>
        <option value="Хэтчбек">Хэтчбек </option>
        <option value="Внедорожник">Внедорожник</option>
      </select>
      <select name="engine" id="engine">
        <option value="">Двигатель</option>
        <option value="Бензиновый">Бензиновый</option>
        <option value="Дизельный">Дизельный</option>
      </select>
      <select name="modification" id="modification">
        <option value="">Модификация</option>
        <option value="Да">Да</option>
        <option value="Нет">Нет</option>
      </select>
    </div>
  );
};
