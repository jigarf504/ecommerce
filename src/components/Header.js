import {Container,Nav,Navbar,NavDropdown,Badge} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Header = () => {
    const cartCount = useSelector((state) => state.cart.length);
    return (
        <Navbar bg="light" expand="lg"  fixed="top">
            <Container>
                <Navbar.Brand href="#home">ABC Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cart"><Badge bg="secondary">{cartCount}</Badge> Cart</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <NavDropdown title="Username" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                        Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item >
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default Header