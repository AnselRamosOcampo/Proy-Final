import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Card, Button, Modal } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


function Titulo(props) {
  return (
    <div className="bg-dark text-white p-3 text-center">
      <h1>Cinemateca Boliviana</h1>
    </div>
  );
}
function Menu(props) {
  return (
    <Navbar className='custom-navbar' light expand="md">
      <Nav className="mx-auto" navbar>
        <Link to="/" className="nav-link">PRINCIPAL</Link>
        <Link to="/peliculas" className="nav-link">PELICULAS</Link>
      </Nav>
    </Navbar>
  );
}
function Actores({ image, title, props }) {
  return (
    <Card body className="text-center">
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h5 className="mt-1">{title}</h5>
    </Card>
  );
}
function PagPrincipal(props) {
  return (
    <Row className="my-4">
      <Col md="4">
        <Actores image="https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" title="Keanu Reeves" />
      </Col>
      <Col md="4">
        <Actores image="https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2021/06/17/60cb588f37882.r_d.2156-2644.jpeg" title="Tom Hiddleston" />
      </Col>
      <Col md="4">
        <Actores image="https://media.themoviedb.org/t/p/w500/gn3pDWthJqR0VDYGViGD3048og7.jpg" title="Sylvester Stallone" />
      </Col>
    </Row>
  );
}

function Desc({ isOpen, toggle, title, summary }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="p-4">
        <h4>{title}</h4>
        <p>{summary}</p>
        <Button onClick={toggle}>Ver ahora</Button>
        <Button onClick={toggle}>Cerrar</Button>
      </div>
    </Modal>
  );
}

function Peliculas(props) {
  const [modal, setModal] = React.useState(false);
  const [selected, setSelected] = React.useState({});
  const toggle = () => setModal(!modal);
  const openModal = (title, summary) => {
    setSelected({ title, summary });
    setModal(true);
  };
  const peliculas = [
    { title: 'Película 1', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat distinctio quia similique perspiciatis dolorem saepe voluptatem, neque velit iusto quibusdam! Obcaecati, unde harum voluptate culpa qui quasi ipsam est.' },
    { title: 'Película 2', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat distinctio quia similique perspiciatis dolorem saepe voluptatem, neque velit iusto quibusdam! Obcaecati, unde harum voluptate culpa qui quasi ipsam est.' },
    { title: 'Película 3', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat distinctio quia similique perspiciatis dolorem saepe voluptatem, neque velit iusto quibusdam! Obcaecati, unde harum voluptate culpa qui quasi ipsam est.' },
    { title: 'Película 4', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat distinctio quia similique perspiciatis dolorem saepe voluptatem, neque velit iusto quibusdam! Obcaecati, unde harum voluptate culpa qui quasi ipsam est.' },
    { title: 'Película 5', summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat distinctio quia similique perspiciatis dolorem saepe voluptatem, neque velit iusto quibusdam! Obcaecati, unde harum voluptate culpa qui quasi ipsam est.' },
  ];
  return (
    <div className="my-4 text-center">
      {peliculas.map((p, index) => (
        <Button key={index} color="primary" className="m-2" onClick={() => openModal(p.title, p.summary)}>
          {p.title}
        </Button>
      ))}
      <Desc isOpen={modal} toggle={toggle} title={selected.title} summary={selected.summary} />
    </div>
  );
}

function Footer(props) {
  return (
    <Row className="p-3" style={{ backgroundColor: 'black' , color: 'yellow'}}>
      <Col md="5" className='footer-left' style={{color: 'white'}}>Eddy Anselmo Ramos Ocampo</Col>
      <Col md="4" className="text-end">Publicidad: Programacion Web II - INF122</Col>
    </Row>
  );
}
function Principal(props) {
  return (
    <Router>
      <Container fluid>
        <Titulo />
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<PagPrincipal />} />
            <Route path="/peliculas" element={<Peliculas />} />
          </Routes>
        </Container>
        <Footer />
      </Container>
    </Router>
  );
}

export default Principal;
