//Import styles
import s from "./App.module.scss";

//Import components
import Footer from "./Components/Footer/Footer";
import MyInfo from "./Components/MyInfo/MyInfo";
import MyWorks from "./Components/MyWorks/MyWorks";
import Feedbacks from "./Components/Feedbacks/Feedbacks";

//Import images
import {carouselImages} from "./Components/Resources/Images/Images"

function App() {
  return (
    <div className={s.AppWrapper}>
      <MyInfo />
      <MyWorks carouselImages={carouselImages}/>
      <Feedbacks />
      <Footer />
    </div>
  );
}

export default App;
