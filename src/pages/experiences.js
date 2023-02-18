import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import { experiences } from "@/cfg/experiences";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Experiences() {
  return (
    <>
      <Layout page="experiences" title="Experiencia">
        <Container>
          <Row>
          <Col md="12">
              <Card.Body className="text-center">
                <Terminal dir="experience">
                  {experiences.map(({ title, description, from, to, technologies }, i) => (
                    <div className="p-2" key={i}>
                      <hr className="border border-light border-3 opacity-75"/>
                      <br />
                        <h4 className="adaptable-text-90">{title}</h4>
                        <h5 className="adaptable-text-70">
                          {from} {to ? `- ${to}` : "- Actualmente"}
                        </h5>
                        <h5 className="adaptable-text-70">Tecnologías:</h5><h5 className="adaptable-text-60">{technologies}</h5>
                        <br />
                        
                        <p className="adaptable-text-60 adaptable-text-border lh-sm bg-info p-4">{description}</p>
                        <hr className="border border-light border-3 opacity-75"/>
                    </div>
                  ))}
                </Terminal>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
