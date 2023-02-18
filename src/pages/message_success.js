import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Message_success() {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col md="3" className="mx-auto text-center">
              <Card.Body>
                <Terminal dir="message-success">
                  <Card.Title>Mensaje enviado</Card.Title>
                  <Card.Text>
                    Regresar al inicio
                    <br />
                    <br />
                    <Link href="/" passHref legacyBehavior>
                      <Button variant="secondary">Ir al inicio</Button>
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
