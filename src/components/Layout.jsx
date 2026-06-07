// import React from "react";
// import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";
import Schemes from "../pages/Schemes";

export default function Layout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        {/* <Outlet /> */}
        <Schemes />
      </main>
      <Footer />
    </div>
  );
}
