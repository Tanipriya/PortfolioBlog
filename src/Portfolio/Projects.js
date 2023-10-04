import React from "react";
import image from "../Asset/undraw_software_engineer_re_tnjc.svg";
import img1 from "../Asset/How-to-Implement-CRUD-Operations-on-SQL-Table-Using-External-Content-Type-in-SharePoint.jpg";
import img2 from "../Asset/Best-Desk-Setup-for-Software-Engineers.jpg";
import img3 from "../Asset/Untitled_design_(12)_1600925482551_1600925492949.avif";
import img4 from "../Asset/images.jpeg";
import img5 from "../Asset/TicTacToe_OG-logo.jpg";

const projectDetails = [
  {
    img: <img className="h-[220px] rounded-md" src={img1} alt="" />,
    projectName: "CRUD Operation",
    title: "Web Application",
  },
  {
    img: <img className="h-[220px] rounded-md" src={img3} alt="" />,
    projectName: "Wikipedia Search",
    title: "Web Application",
  },
  {
    img: <img className="h-[220px] w-80 rounded-md" src={img4} alt="" />,
    projectName: "Calculator",
    title: "Web Application",
  },
  {
    img: <img className="h-[220px] rounded-md" src={img5} alt="" />,
    projectName: "Tic Tac Toe",
    title: "Web Application",
  },
  {
    img: <img className="h-[220px] rounded-md" src={img2} alt="" />,
    projectName: "Student Management System",
    title: "Software Application",
  },
  {
    img: <img className="h-[220px] rounded-md" src={img2} alt="" />,
    projectName: "Excel to JSON Converter",
    title: "Web Application",
  },
];

const Projects = () => {
  return (
    <>
      <div className="p-5">
        <div className=" flex m-2 mt-5 ">
          <div className="flex flex-col justify-center items-center ml-5 text-white">
            <h1 className="font-medium text-2xl">I am Tanisha Priya</h1>
            <h1> I am Software Developer</h1>
            <button>Download CV</button>
          </div>
          <div className="flex w-3/4">
            <img
              src={image}
              className="sm:w-[300px] md:ml-48 md:w-3/4"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="mt-20 mb-10">
            <h1 className="text-white text-xl font-medium text-center underline">
              Projects Portfolio
            </h1>
          </div>

          <div className=" flex justify-center flex-wrap mt-5">
            {projectDetails.map((item) => (
              <div className="h-80 bg-[#1E3851] shadow-2xl border rounded-md  flex flex-wrap  m-4 ">
                <div className="w-80 object-cover">
                  <h1>{item.img}</h1>
                  <div className="p-4 flex flex-col">
                    <h1 className="text-lg font-semibold text-white">
                      {" "}
                      {item.projectName}
                    </h1>
                    <h1 className="mt-2  text-white">{item.title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
