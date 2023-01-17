import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function App() {
  return (
    <>
    <Header/>
    hello
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

