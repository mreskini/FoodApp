import ComponentWrapper from "./component-wrapper"
import deliveryBoyImage from "../assets/img/delivery-boy.png"
const DeliveryBoy = () => {
    return (
        <div className="py-5">
            <div className="theme-orange-color display-2 font-weight-bold">
                Customers to get delivered their ordered foods
            </div>
            <div className="row pt-5">
                <div className="col-lg-6">
                    <img src={deliveryBoyImage} alt="Delivery Boy Image" />
                </div>
            </div>
        </div>
    )
}

const DeliveryBoySection = ComponentWrapper(DeliveryBoy, "delivery-boy-section-bg")
export default DeliveryBoySection