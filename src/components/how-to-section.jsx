import ComponentWrapper from "./component-wrapper"
import howToBackgroundImage from "../assets/img/how-to-bg.png"

const HowTo = () => {
    return (
        <>
            <div className="py-5 my-5">
                <div className="theme-orange-color display-3 font-weight-bold text-center">
                    How it works
                </div>
            </div>
        </>
    )
}

const HowToSection = ComponentWrapper(HowTo, "")
export default HowToSection
