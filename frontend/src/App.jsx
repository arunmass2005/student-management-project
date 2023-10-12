import { useState } from "react";
import Login from "./components/Login.jsx";
import Registration from "./components/Registraton.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Edit from "./components/Edit.jsx";
import Export from './components/Export.jsx'
export default function App() {
  console.log("app")
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Profile/>}/>
          <Route path='edit' element={<Edit/>}/>
          <Route path='export' element={<Export/>}/>
      </Route>
      <Route path="/register" element={<Registration/>}/>
      <Route path="*" element={<Navigate to={'/dashboard'} replace={true}/>}/>

    </Routes>
  );
}
