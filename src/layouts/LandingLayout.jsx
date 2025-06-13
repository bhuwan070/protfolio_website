import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
const LandingLayout = () => {
  return (
    <div className="relative flex">
      <div className="min-w-0 flex-1">
        <ScrollToTop />
        <Nav />
        <Header />
        <main className="container mx-auto px-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;
