import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import EquipmentManuals from './components/EquipmentManuals';
import Projects from './components/Projects';
import Join from './components/Join';
import Contact from './components/Contact';
import './App.css'; // Will create this file for custom styles

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">메이커 동아리</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">홈</Nav.Link>
              <Nav.Link as={Link} to="/manuals">장비 매뉴얼</Nav.Link>
              <Nav.Link as={Link} to="/projects">프로젝트</Nav.Link>
              <Nav.Link as={Link} to="/join">가입 안내</Nav.Link>
              <Nav.Link as={Link} to="/contact">연락처</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manuals" element={<EquipmentManuals />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
