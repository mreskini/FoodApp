import { Container, Nav, Navbar } from "react-bootstrap"
import logoWhite from "../assets/img/logo-white.png"
export default function Navigation() {
    return (
        <Navbar expand="lg" className="p-0">
            <Container className="mx-0 col-12">
                <Navbar.Brand href="#" className="ml-auto">
                    <img
                        src={logoWhite}
                        alt="Logo White"
                        className="img-fluid"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" className="navigation-bar-item active-section">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="navigation-bar-item">
                            Pages
                        </Nav.Link>
                        <Nav.Link href="#" className="navigation-bar-item">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#" className="navigation-bar-item">
                            How?
                        </Nav.Link>
                        <Nav.Link href="#" className="navigation-bar-item">
                            Overview
                        </Nav.Link>
                    </Nav>
                    <div className="btn btn-theme-orange ml-auto">
                        Get Started
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
