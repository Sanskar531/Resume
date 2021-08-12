import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import Uni from "./Uni.png";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";

const Project = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Row className="pt-2 pb-2">
          <Col className="d-flex justify-content-center">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>1. Country-finder App</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                - Made use of an external api called{" "}
                <a href="https://www.restcountries.eu">restcountries.eu</a> to
                pull in data about different countries.
              </ListGroup.Item>
              <ListGroup.Item>
                - Implemented a simple search function to find different
                countries and display them.
              </ListGroup.Item>
              <ListGroup.Item>
                - Applied React states in order to manage the search filtering.{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                - Put a show function to fruition which when clicked would show
                the country.
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://github.com/Sanskar531/Country-finder">
                  Github
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="col-4">
            <Image src={c1} className=" w-100 h-100" />
          </Col>
          <Col className="col-5">
            <Image src={c2} className=" w-100 h-100" />
          </Col>
          <Col className="col-3">
            <Image src={c3} className=" w-100 h-100" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              2. Univariate and Multivaraite Linear learning model
              implementation
            </h2>
            <Row className="pt-2 pb-2">
              <Col>
                <Image src={Uni} className="w-100 h-100"></Image>
              </Col>
              <Col className="col-8 d-flex align-items-center">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    - Used python and pandas to implement a linear learning
                    model with gradient descent.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    - Took an iterative approach than a vectorized method for
                    gradient descent.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    - Made use of Matlab's powerful linear algebra library to
                    create a multivariate learning model.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    - Added another way to find the optimized model through
                    Normal Equation for multivariate linear regression.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="https://github.com/Sanskar531/Regression/tree/master/Univariate%20Regression">
                      Univariate Regression(Github)
                    </a>
                    ,<span> </span>
                    <a href="https://github.com/Sanskar531/Matlab-ML-models/tree/master/Multivariate%20Regression">
                      Mutivariate Regression(Github)
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
