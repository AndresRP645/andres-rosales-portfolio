import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Error404() {
  return (
    <>
      <Layout title="404 Error">
        <Container>
          <Row>
            <Col md="3" className="mx-auto text-center">
              <Card.Body>
                <Terminal dir="404_Error">
                  <Card.Title>404 Error</Card.Title>
                  <Card.Text>
                    Esta página no existe
                    <br />
                    favor de regresar al inicio
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
