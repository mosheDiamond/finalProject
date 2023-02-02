import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import SignUp from "./components/SignUp";
import Login from './components/Login'
import ForgotPassword from "./components/ForgotPassword";
import './style/style.css'
import AddDetailes from "./components/AddDetailes";
import AboutUs from "./components/AboutUs";
import PersonalMainPage from "./components/PersonalMainPage";
import Footer from "./components/Footer";
import { useCurrenUserInfo } from "./Context/CurrenUserInfoContext";
import ErrNotLoggedIn from "./components/ErrNotLoggedIn";
import ChildPage from "./components/ChildPage";
import { useAuth } from "./Context/AuthContext";


export default function App() {
  const{currenUserInfoState} = useCurrenUserInfo();
  const { currentUser } = useAuth();

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/addDetailes" element={(currentUser)?<AddDetailes/>:<ErrNotLoggedIn/>}/>
      <Route path="/user/main" element={(currentUser)?<PersonalMainPage/>:<ErrNotLoggedIn/>}/>
      <Route path="/child/:name" element={(currentUser)?<ChildPage/>:<ErrNotLoggedIn/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

