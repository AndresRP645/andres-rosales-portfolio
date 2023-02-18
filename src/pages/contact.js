import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import { social_networks } from "@/cfg/social_networks";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Layout page="contact" title="Contactame">
        <Container>
          <Row className="p-4">
            <Col md="12">
            <Card.Body>
              <Terminal dir="contact">
                <div className="my-auto">
                <Form name="contact" method="POST"  data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullname"
                      placeholder="Ingresa tu Nombre Completo"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ingresa tu correo"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Message">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Ingresa tu mensaje"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Enviar mensaje
                  </Button>
                </Form>
                </div>
              </Terminal>
            </Card.Body>
            </Col>
          </Row>
          <br />
          <Row className="p-4">
            <Col md="12">
            <Card.Body>
              <Terminal dir="contact">
                  <Col md="12" className="mx-auto text-center">
                    <Row>
                      <br />
                      {social_networks.map(({ url, image, label }, i) => (
                        <Col md="1" className="mx-auto mt-3" key={i}>
                          <a href={url} target="_blank" className="slider-nav-item">
                            <img
                              className="small-image"
                              src={`/social_networks/${image}`}
                            />
                          </a>
                          {` ${label}`}
                        </Col>
                      ))}
                    </Row>
                  </Col>
              </Terminal>
            </Card.Body>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
