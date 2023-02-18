import Link from "next/link";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { navLinks } from "@/cfg/navLinks";
export default function Navigation({ page, title }) {
  return (
    <>
      <Navbar key="xxl" bg="dark" variant="dark" expand="xxl" className="mb-3">
        <Container>
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xxl"
            aria-labelledby="offcanvasNavbarLabel-expand-xxl"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-end">
              <Nav variant="pills" defaultActiveKey={`/${page}`}>
                {navLinks.map(({ title, path }, i) => (
                  <Link href={path} passHref legacyBehavior key={i}>
                    <Nav.Link>{title}</Nav.Link>
                  </Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <Button
        className="cv-button mx-auto"
          href="/files/ARP-CV.pdf"
          variant="primary"
          target="_blank"
        >
          Descargar CV
        </Button>
      </Navbar>
    </>
  );
}
