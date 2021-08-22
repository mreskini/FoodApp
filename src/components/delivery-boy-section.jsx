import ComponentWrapper from "./component-wrapper"
import deliveryBoyImage from "../assets/img/delivery-boy.png"
const DeliveryBoy = () => {
    return (
        <div className="py-5">
            <div className="theme-orange-color display-2 font-weight-bold">
                Customers to get delivered their ordered foods
            </div>
            <div className="row py-5">
                <div className="col-lg-6">
                    <img src={deliveryBoyImage} className="img-fluid pr-3" alt="Delivery Boy Image" />
                </div>
                <div className="col-lg-6">
                    <p className="theme-title-color h4 font-weight-600">
                        Menu Management
                    </p>
                </div>
            </div>
        </div>
    )
}

const DeliveryBoySection = ComponentWrapper(DeliveryBoy, "delivery-boy-section-bg")
export default DeliveryBoySection