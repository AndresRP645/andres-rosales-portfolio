import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { carousel } from "@/cfg/carousel";
export default function About() {
  return (
    <>
      <Layout page="about" title="Acerca de mi">
        <Container>
          <Row>
            <Col md="12">
              <Card.Body className="mx-auto text-center">
                <Terminal dir="about">
                  <h1>Estos son algunos de mis intereses y hobbies</h1>
                  <Carousel>
                    {carousel.map(({name, image}, i) => (
                    <Carousel.Item key={i}>
                    <img
                      className="carousel-img d-block w-100"
                      src={`/carousel/${image}`}
                      alt={name}
                    />
                    <Carousel.Caption>
                    <span class="badge rounded-pill"><h3>{name}</h3></span>
                    </Carousel.Caption>
                  </Carousel.Item>
                    ))}
                  </Carousel>
                </Terminal>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
