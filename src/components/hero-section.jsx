import ComponentWrapper from "./component-wrapper"

const Hero = () => {
    return (
        <div className="py-5">

        </div>
    )
}

const HeroSection = ComponentWrapper(Hero, "delivery-boy-section-bg")
export default HeroSection