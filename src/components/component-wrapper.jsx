const ComponentWrapper = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="row">
                <div className="col-11 mx-auto p-0 pb-5">
                    <WrappedComponent {...props} />
                </div>
            </div>
        )
    }
}
export default ComponentWrapper