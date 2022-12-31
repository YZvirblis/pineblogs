import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8800/api/";

const router = createBrowserRouter([
  {
    path: "/auth/",
    element: <AuthenticationPage />,
  },
]);

function App() {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
