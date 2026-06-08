// import React from "react";
// import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";
import Users from "../pages/Users";

export default function Layout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        {/* <Outlet /> */}
        <Users />
      </main>
      <Footer />
    </div>
  );
}
