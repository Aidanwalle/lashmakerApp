//Import styles
import s from "./Footer.module.scss";

//Import images
import { ReactComponent as InstagramLogo } from "../../Assets/icons/instagram.svg";
import { ReactComponent as ViberLogo } from "../../Assets/icons/viber.svg";
import { ReactComponent as TelegramLogo } from "../../Assets/icons/telegram.svg";
import { ReactComponent as WhatsAppLogo } from "../../Assets/icons/whatsapp.svg";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.SocialMediaWrapper}>
        <div className={s.socialMediaBlock}>
          <a href="instagram.com">
            <InstagramLogo className={s.socialMediaIcon} />
          </a>
          <p>Instagram</p>
        </div>
        <div className={s.socialMediaBlock}>
          <a href="viber.com">
            <ViberLogo className={s.socialMediaIcon} />
          </a>
          <p>Viber</p>
        </div>
        <div className={s.socialMediaBlock}>
          <a href="telegram.com">
            <TelegramLogo className={s.socialMediaIcon} />
          </a>
          <p>Telegram</p>
        </div>
        <div className={s.socialMediaBlock}>
          <a href="whatsapp.com">
            <WhatsAppLogo className={s.socialMediaIcon} />
          </a>
          <p>WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
