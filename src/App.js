//Import styles
import s from "./App.module.scss";

//Import components
import Footer from "./Components/Footer/Footer";
import MyInfo from "./Components/MyInfo/MyInfo";
import MyWorks from "./Components/MyWorks/MyWorks";
import Feedbacks from "./Components/Feedbacks/Feedbacks";

//Import images
import {carouselImages, puzzledCatImages} from "./Components/Resources/Images/Images"
import PageThatIsNot from "./Components/Page 404/404";

function App() {
  return (
    <div className={s.AppWrapper}>
      {/* <div className={s.hiddenWrapper}>
        <p>Извините, наше приложение не адаптировано под горизонтальные экраны.</p> 
        <p>Пожалуйста, поверните Ваш телефон вертикально.</p> 
        <p className={s.smallText}>p.s. если Вы открыли сайт с компьютера, то примите наши соболезнования</p> 
      </div> */}
      <MyInfo />
      <MyWorks carouselImages={carouselImages}/>
      <Feedbacks />
      <Footer />
      <PageThatIsNot puzzledCatImages={puzzledCatImages}/>
    </div>
  );
}

export default App;
