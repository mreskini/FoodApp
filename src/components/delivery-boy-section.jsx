import ComponentWrapper from "./component-wrapper"

const DeliveryBoy = () => {
    return (
        <div>
            <div className="theme-orange-color display-2 font-weight-bold">
                Customers to get delivered their ordered foods
            </div>
        </div>
    )
}

const DeliveryBoySection = ComponentWrapper(DeliveryBoy, "delivery-boy-section-bg")
export default DeliveryBoySection