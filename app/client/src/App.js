import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Outlet, useNavigate } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import api from "./api";
import React from "react";
import { Navigate } from "react-router-dom";
function App() {
  // const navigate = useNavigate();
  // React.useState(() => {
  //   api.get("auth/check").catch((error) => {
  //     navigate("/auth");
  //   });
  // }, []);
  return (
    <>
      <Header />
      <main>
        <div className="page">
          <LeftBar />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
