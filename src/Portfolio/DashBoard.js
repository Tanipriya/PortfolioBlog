import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

const DashBoard = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#0D2438]">
        <div className="mx-auto w-full">
          <Navbar />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
