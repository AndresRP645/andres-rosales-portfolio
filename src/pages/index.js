import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import { skills } from "@/cfg/skills";
import { certifications } from "@/cfg/certifications";
import { Row, Card, Col, Button, Image } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Layout page="" title="Inicio">
        <Row>
          <Col md="auto" className="my-auto">
            <Card.Body>
              <Terminal dir="home">
                <Row>
                  <Col md="4">
                    <Image src="/profile.jpg" className="profile-image p-2" />
                  </Col>
                  <Col md="7" className="mx-auto text-center px-2">
                    <h2 className="adaptable-text-90">Hola Soy Andrés</h2>
                    <h4 className="adaptable-text-80">
                      Programador y desarrollador web
                    </h4>
                    <br />
                    <p className="adaptable-text-60">
                      Soy apasionado del mundo de la tecnología y el diseño del
                      mismo, autodidacta y amante del aprendizaje. Me encanta
                      ayudar a mis compañeros tanto siendo alumno como empleado,
                      ya que siempre he sido de la idea que el conocimiento si
                      no se transmite no sirve de nada.
                      <br />
                      <br />
                      Mi meta es ser FullStack Developer y Game Developer.
                      <br />
                      <br />Y siempre he sido de la idea que constantemente hay cosas
                      nuevas que aprender y nunca es tarde para comenzar un
                      nuevo proyecto o aprendizaje.
                    </p>
                  </Col>
                </Row>
              </Terminal>
            </Card.Body>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="12">
            <Card.Body className="text-center">
              <Terminal dir="skills">
                <h1>Skills</h1>
                <Row>
                  {skills.map(({ image, skill }, i) => (
                    <Col md="3" key={i} className="mx-auto py-2">
                      <img className="small-image" src={`/skills/${image}`} />
                      <p>{skill}</p>
                    </Col>
                  ))}
                </Row>
              </Terminal>
            </Card.Body>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="12">
            <Card.Body className="text-center">
              <Terminal dir="courses-and-certifications">
                {certifications.map(({ type, company, name, image, file }, i) => (
                  <div className="p-2" key={i}>
                    <hr className="border border-light border-3 opacity-75" />
                    <br />
                    <img className="small-image" src={`/certifications/${image}`} />
                    <br />
                    <br />
                    <h5 className="adaptable-text-70 mx-auto">
                      {type} de {company}
                    </h5>
                    <h5 className="adaptable-text-70">{name}</h5>
                    <br />
                    {file ? 
                    <Button
                    className="cv-button mx-auto"
                    href={`/files/${file}`}
                    variant="primary"
                    target="_blank"
                  >
                    Ver Certificado
                  </Button>
                    : <></>}
                    <hr className="border border-light border-3 opacity-75" />
                  </div>
                ))}
              </Terminal>
            </Card.Body>
          </Col>
        </Row>
        <br />
      </Layout>
    </>
  );
}
