import { ReactNode } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const WithNavBar = (WrappedComponent: ReactNode) => {
  return () => {
    return (
      <>
        <Navbar expand="lg" className="" style={{ backgroundColor: "#844dbf" }}>
          <Container>
            <Link style={{ fontWeight: "bold", color: "black", fontSize: "20px", textDecoration: "none" }} to="/">
              На главную
            </Link>
            <Link style={{ fontWeight: "bold", color: "black", fontSize: "20px", textDecoration: "none" }} to="/login">
              Авторизация
            </Link>
            <Link
              style={{ fontWeight: "bold", color: "black", fontSize: "20px", textDecoration: "none" }}
              to="/registration"
            >
              Регистрация
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
        {WrappedComponent}
      </>
    );
  };
};

export default WithNavBar;
