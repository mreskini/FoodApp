import ComponentWrapper from "./component-wrapper"
import orderImage from "../assets/img/order-bg.png"
const Order = () => {
    return (
        <div className="py-5 my-5">
            <div className="row py-5">
                <div className="col-lg-6">
                    <img
                        src={orderImage}
                        className="img-fluid pr-3"
                        alt="Delivery Boy"
                    />
                </div>
                <div className="col-lg-6 my-auto">
                    <h4 className="theme-title-color font-weight-600 my-3">
                        Menu Management
                    </h4>
                    <p className="theme-content-color font-weight-400 line-height-30">
                        Effort into each unique project knowing that the more we
                        put into it, the more we get out of it.
                    </p>
                    <h4 className="theme-title-color font-weight-600 my-3">
                        Food Management
                    </h4>
                    <p className="theme-content-color font-weight-400 line-height-30">
                        Effort into each unique project knowing that the more we
                        put into it, the more we get out of it.
                    </p>
                    <h4 className="theme-title-color font-weight-600 my-3">
                        Delivery Management
                    </h4>
                    <p className="theme-content-color font-weight-400 line-height-30">
                        Effort into each unique project knowing that the more we
                        put into it, the more we get out of it.
                    </p>
                </div>
            </div>
        </div>
    )
}

const OrderSection = ComponentWrapper(Order, "delivery-boy-section-bg")
export default OrderSection
