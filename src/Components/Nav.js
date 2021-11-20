import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = ({ projectHandler, resumeHandler, homeHandler }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>SG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={homeHandler}>Home</Nav.Link>
            <Nav.Link onClick={projectHandler}>Projects</Nav.Link>
            <Nav.Link onClick={resumeHandler}>Download my Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
