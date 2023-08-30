import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path="/"/>
      <Route element={<Detail />} path="/Detail/:id"/>
      <Route element={<Favorite />} path="/Favorite"/>
    </Routes>
    </BrowserRouter>
  )
}

export default App