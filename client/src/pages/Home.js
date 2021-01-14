import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  console.log(props);
    return (
      <div>
        <Jumbotron />

        <Container className="mt-4">
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <strong>Search Books</strong>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <Link to="/search">
                      <Button variant="success">SEARCH BOOKS</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  {" "}
                  <strong>Saved Books</strong>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <Link to="/saved">
                      <Button variant="warning">SAVED BOOKS </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  export default Home;