import '../index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Home() {
    return (
      <Navbar expand="lg" className="justify-content-end">
        <Nav>
          <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
}