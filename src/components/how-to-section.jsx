import ComponentWrapper from "./component-wrapper"

const HowTo = () => {
    return (
        <>
            Hello world Neo is here!
        </>
    )
}

const HowToSection = ComponentWrapper(HowTo, "")
export default HowToSection
