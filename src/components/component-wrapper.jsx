const ComponentWrapper = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ComponentWrapper