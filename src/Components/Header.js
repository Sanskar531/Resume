import { Container, Row, Col } from "react-bootstrap";
import Renderer from "./Renderer";
import Nav from "./Nav.js";
const Header = ({ page, resumeHandler, projectHandler, homeHandler }) => {
  return (
    <div>
      <Container className="mt-5 my-auto">
        <Row className="">
          <Col>
            <Nav
              resumeHandler={resumeHandler}
              projectHandler={projectHandler}
              homeHandler={homeHandler}
            />
          </Col>
        </Row>
        <Renderer page={page}></Renderer>
      </Container>
    </div>
  );
};

export default Header;
