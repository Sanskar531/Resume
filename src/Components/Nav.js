import { Col, Container, Row, Button } from "react-bootstrap";

const Nav = ({ projectHandler, resumeHandler, homeHandler }) => {
  return (
    <Container className="bg-primary rounded border">
      <Row className="pt-3 pb-3">
        <Col className="col-2">
          <Button onClick={homeHandler} variant="light" className="width-100">
            Home
          </Button>
        </Col>
        <Col className="col-8 d-flex justify-content-end mr-1 width-100">
          <Button
            onClick={projectHandler}
            variant="light"
            className="align-right"
          >
            My Projects
          </Button>
        </Col>
        <Col className="col-2 d-flex justify-content-end width-100">
          <Button onClick={resumeHandler} variant="light">
            My Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
