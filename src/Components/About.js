import { Container, Row, Col } from "react-bootstrap";

const About = (props) => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col className="col-12 text-center">
          <h1>Hey! I am Sanskar Gauchan.</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>
            <u>Welcome to my website!</u> <br />
          </h2>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          I am a student currently studying at UTS. I am doing bachelor of IT with Data Analytics as my major
          and software development as my sub major. I am very intrested in the field of computer science and 
          and really see myself having a long term career in this field. <br /> <br />
          Later in the future, I want to also pursue a career in research. Since, I believe there is a lot of thing
          left to be invented in the field and I want to be one of the people who can help discover and help prosper
          the field of computer science. <br />
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">
            Find me on:{" "}
            <a href="https://www.linkedin.com/in/sanskar-gauchan-b976b81b8/">
              Linkedin
            </a>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
