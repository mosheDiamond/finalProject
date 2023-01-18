import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import SignUp from "./components/SignUp";
import Login from './components/Login'
import ForgotPassword from "./components/ForgotPassword";
import { Container } from "react-bootstrap";
import './style/style.css'

export default function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signup" element={   <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
      <SignUp/>
      </div>
    </Container>}/>
      <Route path="/login" element={
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
      <Login/>
      </div>
    </Container>
    }/>
    <Route path="/forgotPassword" element={
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <div className="w-100" style={{maxWidth:'400px'}}>
      <ForgotPassword/>
      </div>

    </Container>
    }/>

    </Routes>
    </>
  )
}

