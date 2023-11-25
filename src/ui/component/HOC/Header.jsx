import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const WithNavBar = (WrappedComponent) => {
  return () => {
    return (
      <>
        <Navbar style={{ backgroundColor: "#3f1e54" }}>
          <Container>
            <Navbar.Brand>
              <Link
                style={{
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                to="/"
              >
                Главная
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ color: "white", fontSize: "20px", textDecoration: "none" }} to="/login">
                  Авторизация
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: "white", fontSize: "20px", textDecoration: "none" }} to="/registration">
                  Регистрация
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {WrappedComponent}
      </>
    );
  };
};

export default WithNavBar;
