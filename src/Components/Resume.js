import { Container, Row, Col } from "react-bootstrap";
import resume from "./assets/Resume.docx";
const Resume = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Resume should be downloading....</h1>
          </Col>
        </Row>
      </Container>
      <iframe title="resume" src={resume}></iframe>
    </div>
  );
};

export default Resume;
