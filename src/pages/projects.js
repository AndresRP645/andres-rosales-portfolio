import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import { projects } from "@/cfg/projects";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Projects() {
  return (
    <>
      <Layout page="projects" title="Proyectos">
        <Container>
          <Row>
            <Col md="12" className="my-auto">
              <Terminal dir="projects" className="projects">
                <Row>
                  <Col md="12">
                    <h1 className="mx-auto text-center">Proyectos</h1>
                  </Col>
                  {projects.map(({ name, description, page, image }, i) => (
                    
                    <Col md="5" key={i} className="p-2 mx-auto">
                      <div>
                      <hr className="border border-light border-3 opacity-75" />
                      <Card bg="danger" className="card-project">
                        <Card.Img
                          variant="top"
                          src={`/projects/${image}`}
                          className="image-card"
                        />
                        <Card.Body>
                          <div className="py-2">
                            <Terminal dir="project">
                              <div className="py-2">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <Button
                                  href={page}
                                  variant="primary"
                                  target="_blank"
                                >
                                  go to github repository
                                </Button>
                              </div>
                            </Terminal>
                          </div>
                        </Card.Body>
                      </Card>
                      <hr className="border border-light border-3 opacity-75" />
                      </div>
                    </Col>
                    
                  ))}
                </Row>
                <br />
              </Terminal>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
