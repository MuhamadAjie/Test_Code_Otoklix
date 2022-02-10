import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "../CSS/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.navbarHeader}>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Test Code Otoklix
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="me-5"
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                Home
              </Link>
              <Link
                className="me-5"
                style={{ textDecoration: "none", color: "white" }}
                to="/create"
              >
                Create
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                About Me
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
