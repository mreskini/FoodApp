import ComponentWrapper from "./component-wrapper"

const Hero = () => {
    return (
        <div className="py-5 col-12">
            Some Data thing will go here
        </div>
    )
}

const HeroSection = ComponentWrapper(Hero, "hero-section-bg")
export default HeroSection