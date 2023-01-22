import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/outlets/Layout";
import Home from "./pages/Home";
import RequireAuth from "./components/outlets/RequireAuth";
import PersistLogin from "./components/outlets/PersistLogin";
import TopBar from "./components/topBar/topBar";
import Profile from "./pages/Profile";


function App() {
  
  
  return (
    <div className="relative">
      <TopBar/>
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* PROTECTED ROUTES */}
        <Route path="/" element={<PersistLogin/>}>
          <Route path="/" element={<RequireAuth/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/" element={<Home/>}/>
            </Route>
          </Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
