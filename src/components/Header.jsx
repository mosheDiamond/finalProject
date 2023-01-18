import { Link } from "react-router-dom";
import siteLogo from '../images/logo.jpeg'
import genPerson from '../images/gen-person.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" dir='rtl' className="d-flex justify-content-around align-items-center bg-dark-blue">
      <Container>
        <Link to={''} className='col-lg-1 col-4'>
          <img src={siteLogo} alt="" className="img-fluid " />
        </Link>
        
      <div className="col-3 position-lg-absolute position-static start-0 d-flex justify-content-center align-items-center">
        <Link to={'../../signin'}  className=' col-6 col-lg-5 m-2 m-lg-0 p-0 p-lg-5'>
          <div className=" border rounded-circle  border-white">
            <img src={genPerson} alt="" className="img-fluid" style={{ mixBlendMode: 'color-burn' }} />
          </div>
        </Link>
        <Link to={'../../login'} className="d-none d-lg-block text-decoration-none p-1 fs-4 text-white ">כניסה</Link>
        <span className="d-none d-lg-block text-white fs-4"> / </span>
        <Link to={'../../signup'} className="d-none d-lg-block text-decoration-none p-1 fs-4 text-white ">הרשמה</Link>
      </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  position-lg-absolute position-static start-50  col-4 d-lg-flex justify-content-evenly align-items-center">
              <Link to={''} className='link-light text-decoration-none fs-4'>דף הבית</Link>
              <Link to={'about'} className='link-light text-decoration-none fs-4'>עלינו</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
