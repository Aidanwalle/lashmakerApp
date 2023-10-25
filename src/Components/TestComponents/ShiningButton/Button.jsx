import s from "./Button.module.scss";

function ShiningButton() {
  return (
    <div className={s.wrapper}>
      <button className={s.shiningCoral}>Сияющая кнопка</button>
    </div>
  );
}

export default ShiningButton;
