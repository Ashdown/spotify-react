import React from "react";
import {Route, Routes} from "react-router-dom"
import Homepage from "./components/Homepage/Homepage";
import Authorization from "./components/Authorization/Authorization";
import AuthProvider from "./AuthProvider";

const AppRoutes = () =>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/authorize' element={<Authorization/>}/>
  </Routes>


export default AppRoutes
