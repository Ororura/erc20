import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const WithNavBar = (WrappedComponent) => {
  return () => {
    return (
      <>
        <Navbar style={{backgroundColor: "#844dbf"}}>
          <Container>
            <Nav className="me-auto">
              <Link style={{ color: "white", marginRight: "15px", fontSize: "20px", textDecoration: "none" }} to="/">
                На главную
              </Link>
              <Link
                style={{ color: "white", marginRight: "15px", fontSize: "20px", textDecoration: "none" }}
                to="/login"
              >
                Авторизация
              </Link>
              <Link
                style={{ color: "white", marginRight: "15px", fontSize: "20px", textDecoration: "none" }}
                to="/registration"
              >
                Регистрация
              </Link>
            </Nav>
          </Container>
        </Navbar>
        {WrappedComponent}
      </>
    );
  };
};

export default WithNavBar;
