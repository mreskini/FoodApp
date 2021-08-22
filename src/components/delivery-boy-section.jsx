import ComponentWrapper from "./component-wrapper"

const DeliveryBoy = () => {
    return (
        <div className="theme-orange-color display-1">
            Customers to get delivered their ordered foods
        </div>
    )
}

const DeliveryBoySection = ComponentWrapper(DeliveryBoy)
export default DeliveryBoySection