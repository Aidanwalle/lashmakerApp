//Import styles
import s from "./Feedbacks.module.scss";

//Import images
import feedBackBubbleLM from "../../Assets/images/text-bubbles/left-medium.png";
import feedBackBubbleLS from "../../Assets/images/text-bubbles/left-small.png";
import feedBackBubbleRS from "../../Assets/images/text-bubbles/right-small.png";
import feedBackBubbleRM from "../../Assets/images/text-bubbles/right-medium.png";

function Feedbacks() {
  return (
    <div className={s.Feedbacks}>
      <div className={s.feedbacksBlockBody}>
        <img className={s.feedBackBubble} src={feedBackBubbleRM} alt="отзыв" />
        <img className={s.feedBackBubble} src={feedBackBubbleLS} alt="отзыв" />
        <img className={s.feedBackBubble} src={feedBackBubbleRS} alt="отзыв" />
        <img className={s.feedBackBubble} src={feedBackBubbleLM} alt="отзыв" />
      </div>
    </div>
  );
}

export default Feedbacks;
