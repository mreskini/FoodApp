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
                        <Nav.Link href="#" className="">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="">
                            Pages
                        </Nav.Link>
                        <Nav.Link href="#" className="">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#" className="">
                            How?
                        </Nav.Link>
                        <Nav.Link href="#" className="">
                            Overview
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
