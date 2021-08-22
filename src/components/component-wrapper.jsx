const ComponentWrapper = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ComponentWrapper