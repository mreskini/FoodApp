import ComponentWrapper from "./component-wrapper"

const DeliveryBoy = () => {
    return (
        <div className="theme-orange-color display-2 font-weight-bold">
            Customers to get delivered their ordered foods
        </div>
    )
}

const DeliveryBoySection = ComponentWrapper(DeliveryBoy)
export default DeliveryBoySection