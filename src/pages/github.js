import Layout from "@/components/Layout";
import Terminal from "@/components/Terminal";
import Error from "@/pages/_error";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export async function getServerSideProps(context) {
  const res = await fetch("https://api.github.com/users/AndresRP645");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    },
  };
}

export default function Github({ user, statusCode }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
    
  }
  return (
    <>
      <Layout page="github" title="Github">
        <Container>
          <Row>
            <Col md="4" className="mx-auto text-center">
              <Card.Body>
                <Terminal dir="github">
                  <h1>{user.name}</h1>
                  <img src={user.avatar_url} className="image" />
                  <p>{user.bio}</p>
                  
                  <a
                    href={user.html_url}
                    target="_blank"
                    className="btn btn-danger"
                  >
                    Go to Github
                  </a>
                </Terminal>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
