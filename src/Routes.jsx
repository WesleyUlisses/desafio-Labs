import React from "react";

import Cadastrar from "././pages/Cadastrar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login"

import NewPassword from "./pages/NewPassword";
import Home from "./pages/Home";


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastrar" element={<Cadastrar />}></Route>
            <Route path="/esqueceuSenha" element={<ChangePassword/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/novaSenha" element={<NewPassword/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
