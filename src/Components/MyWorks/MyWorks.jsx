//Import styles
import s from "./MyWorks.module.scss";

function MyWorks({ carouselImages }) {
  return (
    <div className={s.myWorks}>
      <p>
        Я оказываю услуги по наращиванию ресничек на дому, в уютной атмосфере, с
        хорошей музыкой, ароматными маслами и вкусными напитками
      </p>
      <ul>
        <li>Почему тебе стоит выбрать меня?</li>
        <li>Высокое качество</li>
        <li>Оптимальная скорость</li>
        <li>Доступная цена</li>
        <li>Мини-бар</li>
      </ul>
      <div className={s.myWorksBlockBody}>
        {carouselImages.map((image) => (
          <img src={image} alt="Реснички" key={image}/>
        ))}
      </div>
    </div>
  );
}
export default MyWorks;
