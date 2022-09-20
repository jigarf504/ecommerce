import {Container,Nav,Navbar,NavDropdown,Badge} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.length);
  const user = useSelector((state) => state.user);
  const user_id = localStorage.getItem("user_id") || "";
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">ABC Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <Badge bg="secondary">{cartCount}</Badge> Cart
            </Nav.Link>
            {!user_id ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
        {user_id ? (
          <NavDropdown title={user.name} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/user/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/order">
              Orders
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                localStorage.setItem("auth_token", "");
                localStorage.setItem("user_id", "");
                navigate("/");
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
};

export default Header