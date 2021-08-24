import ComponentWrapper from "./component-wrapper"
import wavesImage from "../assets/img/waves.png"
import sandwichImage from "../assets/img/sandwich.png"

const Hero = () => {
    return (
        <div className="py-5 col-12">
            <div className="row">
                <div className="col-lg-7">
                    <div className="display-1 font-weight-600 hero-main-title">
                        Always choose happy food
                    </div>
                    <img
                        src={wavesImage}
                        alt="Waves"
                        className="my-5 img-fluid"
                    />
                    <p className="text-white font-karla font-weight-500 fs-20">
                        These tasty certified USDA Organic eggs come from farms
                        that have been pesticide-free for at least three years
                        and from free range flocks that receive no antibiotics
                    </p>
                </div>
                <div className="col-lg-5">
                    <img
                        src={sandwichImage}
                        alt="Sandwich"
                        className="img-fluid float-right"
                    />
                </div>
            </div>
        </div>
    )
}

const HeroSection = ComponentWrapper(Hero, "hero-section-bg")
export default HeroSection
