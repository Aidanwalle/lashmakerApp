import s from "./404.module.scss";

function PageThatIsNot({ puzzledCatImages }) {
  const puzzledCat =
    puzzledCatImages[Math.floor(Math.random() * puzzledCatImages.length)];
  return (
    <div className={s.pageThatIsNot}>
      <div className={s.textBlock}>
        <h1>404</h1>
        <p>И, всё таки, мы думаем, что такой странички не бывает</p>
        <button>На главную</button>
      </div>
      <img src={puzzledCat} alt="cat" />
    </div>
  );
}

export default PageThatIsNot;
