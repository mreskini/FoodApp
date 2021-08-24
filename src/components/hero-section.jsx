import ComponentWrapper from "./component-wrapper";
import wavesImage from "../assets/img/waves.png"
const Hero = () => {
  return (
    <div className="py-5 col-12">
      <div className="row">
        <div className="col-lg-8 display-1 font-weight-600 hero-main-title">
          Always choose happy food
          <img src={wavesImage} alt="Waves" />
        </div>
      </div>
    </div>
  );
};

const HeroSection = ComponentWrapper(Hero, "hero-section-bg");
export default HeroSection;
