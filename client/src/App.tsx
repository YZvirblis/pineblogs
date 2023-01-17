import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/outlets/Layout";
import Home from "./pages/Home";
import RequireAuth from "./components/outlets/RequireAuth";
import PersistLogin from "./components/outlets/PersistLogin";


function App() {
  
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* PROTECTED ROUTES */}
        <Route path="/" element={<PersistLogin/>}>
          <Route path="/" element={<RequireAuth/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
