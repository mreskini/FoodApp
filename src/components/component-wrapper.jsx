const ComponentWrapper = (WrappedComponent, backgroundColorCssClassName) => {
    return (props) => {
        return (
            <div className="container-fluid">
                <div className={`row ${backgroundColorCssClassName}`}>
                    <div className="col-10 mx-auto">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ComponentWrapper