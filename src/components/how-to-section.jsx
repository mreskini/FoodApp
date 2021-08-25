import ComponentWrapper from "./component-wrapper"
import { BsSearch, BsLayoutTextSidebar, BsReplyAll } from "react-icons/bs"
const HowTo = () => {
    return (
        <div className="padding-bottom-150 padding-top-150">
            <div className="py-5 my-5">
                <div className="h1 font-weight-600 text-center">
                    <span className="how-to-section-title">How it works</span>
                </div>
                <div className="my-5 py-5">
                    <div className="row pb-5 mb-5">
                        <div className="col-lg-4 text-center px-5">
                            <BsSearch className="display-2 mb-4" />
                            <h1 className="how-to-section-title h3 font-weight-600 text-center my-4">
                                Search Resturant
                            </h1>
                            <p className="text-white text-center font-karla">
                                Each time a digital asset is purchased or sold,
                                Sequoir donates a percentage of the fees back
                            </p>
                        </div>
                        <div className="col-lg-4 text-center px-5">
                            <BsLayoutTextSidebar className="display-2 mb-4" />
                            <h1 className="how-to-section-title h3 font-weight-600 text-center my-4">
                                Order Food
                            </h1>
                            <p className="text-white text-center font-karla">
                                Each time a digital asset is purchased or sold,
                                Sequoir donates a percentage of the fees back
                            </p>
                        </div>
                        <div className="col-lg-4 text-center px-5">
                            <BsReplyAll className="display-2 mb-4" />
                            <h1 className="how-to-section-title h3 font-weight-600 text-center my-4">
                                Deliver to You
                            </h1>
                            <p className="text-white text-center font-karla">
                                Each time a digital asset is purchased or sold,
                                Sequoir donates a percentage of the fees back
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HowToSection = ComponentWrapper(HowTo, "how-to-section-bg")
export default HowToSection
