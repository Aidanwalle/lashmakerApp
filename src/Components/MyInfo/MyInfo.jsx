//Import styles
import s from "./MyInfo.module.scss";
import arrowsUp from '../../Assets/icons/arrows-up.svg'

function MyInfo() {
  return (
    <div className={s.myInfo}>
      <div className={s.myPhoto}>
        <h1>Привет! Я Ира</h1>
        <h2>Лэшмейкер</h2>
        <p>с опытом работы более года</p>
      </div>
      <img className={s.arrow1} src={arrowsUp} alt='arrowsUp' />
      <img className={s.arrow2} src={arrowsUp} alt='arrowsUp' />
      <img className={s.arrow3} src={arrowsUp} alt='arrowsUp' />
    </div>
  );
}

export default MyInfo;
