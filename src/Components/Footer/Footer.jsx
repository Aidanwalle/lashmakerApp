//Import styles
import s from "./Footer.module.scss";

//Import images
import instagram from "../../Assets/icons/instagram.png";
import viber from "../../Assets/icons/viber.png";
import telegram from "../../Assets/icons/telegram.png";
import whatsapp from "../../Assets/icons/whatsapp.png";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.SocialMediaWrapper}>
        <div className={s.socialMediaBlock}>
          <a href="instagram.com">
            <img src={instagram} className={s.socialMediaIcon} alt='instagram'/>
          </a>
          <p>Instagram</p>
        </div>
        <div className={s.socialMediaBlock}>
          <a href="viber.com">
            <img src={viber}  className={s.socialMediaIcon} alt='viber'/>
          </a>
          <p>Viber</p>
        </div>
        <div className={s.socialMediaBlock}>
          <a href="telegram.com">
            <img src={telegram}  className={s.socialMediaIcon} alt='telegram'/>
          </a>
          <p>Telegram</p>
        </div>
        <div className={s.socialMediaBlock}>
          <a href="whatsapp.com">
            <img src={whatsapp}  className={s.socialMediaIcon} alt='whatsapp'/>
          </a>
          <p>WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
