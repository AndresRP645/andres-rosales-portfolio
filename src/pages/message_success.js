import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Error404() {
  return (
    <>
      <Layout page="message_success">
        <Container>
          <Row>
            <Col md="3" className="mx-auto text-center">
              <Card.Body>
                <Terminal dir="message_success">
                  <Card.Title>Mensaje enviado</Card.Title>
                  <br />
                  <Card.Text>
                    <Link href="/" passHref legacyBehavior>
                      <Button variant="secondary">Regresar al inicio</Button>
                    </Link>
                  </Card.Text>
                </Terminal>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
