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
            Welcome to my website! <br />
          </h2>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col>
          I am a student currently studying in UTS. I am doing a degee in
          Enterprise Systems Development and Data Analytics. These two field are
          very intresting and dear to my heart. I actually started to love
          coding when i did a core subject named "Application Programming" which
          was super intresting. When I started exploring more and more about the
          field i stumbled upon web-development which looked super intriguing to
          me. <br />
          <br />
          Then I started to learn web-development and machine learning from
          online-resources as well as university courses. Thats how i started to
          write basic machine learning algorithms. One of my projects named
          Linear and Multivariate regression is also a project from a online
          course by "Andrew NG".
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
