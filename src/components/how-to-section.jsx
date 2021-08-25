import ComponentWrapper from "./component-wrapper"
import howToBackgroundImage from "../assets/img/how-to-bg.png"

const HowTo = () => {
    return (
            <div className="py-5 my-5">
                <div className="display-4 font-weight-bold text-center">
                    <span className="how-to-section-title">How it works</span>
                </div>
            </div>
    )
}

const HowToSection = ComponentWrapper(HowTo, "how-to-section-bg")
export default HowToSection
