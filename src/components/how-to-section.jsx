import ComponentWrapper from "./component-wrapper"
import { BsSearch } from "react-icons/bs"
const HowTo = () => {
    return (
        <div className="py-5 my-5">
            <div className="display-4 font-weight-600 text-center">
                <span className="how-to-section-title">How it works</span>
            </div>
            <div className="py-5">
                <div className="col-lg-3 text-center">
                    <BsSearch className="display-1 mb-4" />
                    <h1 className="how-to-section-title h3 font-weight-600 text-center my-4">
                        Search Resturant
                    </h1>
                    <p className="text-white text-center font-karla">
                        Each time a digital asset is purchased or sold, Sequoir
                        donates a percentage of the fees back
                    </p>
                </div>
            </div>
        </div>
    )
}

const HowToSection = ComponentWrapper(HowTo, "how-to-section-bg")
export default HowToSection
