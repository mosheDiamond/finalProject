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
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
    </Routes>
    </>
  )
}

