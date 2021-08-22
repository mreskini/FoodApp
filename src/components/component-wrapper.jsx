import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const ComponentWrapper = (WrappedComponent, title) => {
    return (props) => {
        return (
            <div className="container-fluid">
                <div className="row banner-outer">
                    <div className="row col-12 banner">
                        {
                            localStorage.getItem("user_token") !== null
                            &&
                            <Navbar variant="light" className="shadow-none my-auto align-middle wrapper-header" expand="sm">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <NavLink exact to="/" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Dashboard</NavLink>
                                        <NavLink to="/status/list" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Status List</NavLink>
                                        <NavLink to="/client/list" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Clients List</NavLink>
                                        <NavLink to="/meeting/list" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Meetings List</NavLink>
                                        <NavLink to="/phase/list" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Phases List</NavLink>
                                        <NavLink to="/people/list" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">People List</NavLink>
                                        <NavLink to="/overview" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Overview</NavLink>
                                        <NavLink to="/calendar" className="font-weight-bold h6 my-auto text-dark wrapper-header-list-item mr-3">Calendar</NavLink>
                                        <NavLink to="/logout" className="font-weight-bold h6 my-auto text-dark bg-danger  wrapper-header-list-item-exit">Exit</NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        }
                        <div className="display-3 col-12 mx-0 px-0 mt-3 mb-5">
                            <span className="align-middle" data-testid = "wrapper-title">
                                {
                                    title
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 mx-auto p-0 pb-5">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ComponentWrapper