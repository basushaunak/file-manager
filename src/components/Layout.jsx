// import React from "react";
// import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";
import FileMovement from "../pages/FileMovement";

export default function Layout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        {/* <Outlet /> */}
        <FileMovement />
      </main>
      <Footer />
    </div>
  );
}
