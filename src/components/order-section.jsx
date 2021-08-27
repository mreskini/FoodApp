import ComponentWrapper from "./component-wrapper"
import orderImage from "../assets/img/order-bg.png"
import { BsCheckCircle } from "react-icons/bs"

const Order = () => {
    return (
        <div className="py-5 my-5">
            <div className="row py-5">
                <div className="col-lg-6 my-auto">
                    <p className="theme-content-color font-weight-500">
                        What is this?
                    </p>
                    <h4 className="theme-title-color h1 font-weight-600 my-3">
                        Online Ordering Systems & Mobile Apps for Restaurant
                    </h4>
                    <p className="theme-content-color font-weight-500">
                        Each time a digital asset is purchased or sold, Sequoir
                        donates a percentage of the fees back into the
                        development
                    </p>
                    <ul className="list-inline">
                        <li className="theme-content-color font-weight-500 mb-2">
                            <BsCheckCircle className="theme-orange-color h5 my-auto mr-3" />
                            Each time a digital asset is purchased or sold
                        </li>
                        <li className="theme-content-color font-weight-500 mb-2">
                            <BsCheckCircle className="theme-orange-color h5 my-auto mr-3" />
                            Each time a digital asset is purchased or sold
                        </li>
                        <li className="theme-content-color font-weight-500 mb-2">
                            <BsCheckCircle className="theme-orange-color h5 my-auto mr-3" />
                            Each time a digital asset is purchased or sold
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    <img
                        src={orderImage}
                        className="img-fluid"
                        alt="Delivery Boy"
                    />
                </div>
            </div>
        </div>
    )
}

const OrderSection = ComponentWrapper(Order, "")
export default OrderSection
