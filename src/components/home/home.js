import './home.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function Home() {
    return (
      <div>
        <div>
          <Container class="content">
            <Row>
              <Col class="medium">Hi, I'm</Col>
            </Row>
            <Row>
              <Col class="large">Christian Hausner</Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Card class="card">
                <Card.Body>
                  <Card.Title>Github</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>LinkedIn</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    )
}