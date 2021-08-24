import ComponentWrapper from "./component-wrapper";

const Hero = () => {
  return (
    <div className="py-5 col-12">
      <div className="display-1 font-weight-bold">Always choose happy food</div>
    </div>
  );
};

const HeroSection = ComponentWrapper(Hero, "hero-section-bg");
export default HeroSection;
