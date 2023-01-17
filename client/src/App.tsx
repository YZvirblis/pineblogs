import { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";


function App() {
  
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* PROTECTED ROUTES */}
        <Route path="/" element={<RequireAuth/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
