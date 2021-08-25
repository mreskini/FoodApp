import { Container, Nav, Navbar } from "react-bootstrap"
import logoWhite from "../assets/img/logo-white.png"
export default function Navigation() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logoWhite} alt="Logo White" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="navigation-bar-item">
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
