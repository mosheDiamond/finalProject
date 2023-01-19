import { Link } from "react-router-dom";
import siteLogo from '../images/logo.jpeg'
import genPerson from '../images/gen-person.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { useAuth } from "../Context/AuthContext";

export default function Header() {
  const{currenUserInfoState, setCurrenUserInfoState} = useCurrenUserInfo();
  const {logout} = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" dir='rtl' className="bg-dark-blue">
      <Container>
        <Link to={''} className='col-lg-2 col-4 '>
          <img src={siteLogo} alt="" className="img-fluid " />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="col-4 d-lg-flex justify-content-evenly align-items-center ">
            <Link to={'../../'} className='link-light text-decoration-none fs-4'>דף הבית</Link>
            <Link to={'../../about'} className='link-light text-decoration-none fs-4'>עלינו</Link>
            {(currenUserInfoState)?
              (<>
              <Link to={'../../user/details/:userid'} className='link-light text-decoration-none fs-4'>{/*עמוד הבית הפרטי שלו */}</Link>
              <NavDropdown title="ילדים" id="navbarScrollingDropdown">
            {/* אפשרות לנווט בין הילדים */}
            </NavDropdown>
            </>):null}
          </Nav>
        </Navbar.Collapse>
        <Dropdown className="  m-3 m-md-0 position-absolute position-lg-static end-50 top-0 col-2 col-md-1">
            <Dropdown.Toggle className="bg-dark-blue border-0  "  id="dropdown-basic">
              <div className="col-md-10 border rounded-circle  border-white">
                <img src={genPerson} alt="" className="img-fluid" style={{ mixBlendMode: 'color-burn' }} />
              </div>
            </Dropdown.Toggle>
          <Dropdown.Menu className="bg-nothing">
          {(currenUserInfoState)?
              (<Dropdown.Item><Link to={'../../login'} onClick={logout} className="text-decoration-none p-1 fs-4  ">יציאה</Link></Dropdown.Item>):
              (<><Dropdown.Item><Link to={'../../login'} className="text-decoration-none p-1 fs-4  ">כניסה</Link></Dropdown.Item>
            <Dropdown.Item><Link to={'../../signup'} className="text-decoration-none p-1 fs-4  ">הרשמה</Link></Dropdown.Item></>)}
          </Dropdown.Menu>
        </Dropdown>

      </Container>
    </Navbar>
  )
}
