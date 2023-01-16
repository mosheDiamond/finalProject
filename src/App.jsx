import { Routes } from "react-router-dom";
import Header from "./components/Header";


export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

