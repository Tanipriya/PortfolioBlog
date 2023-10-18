import React from "react";
import img1 from "../Asset/How-to-Implement-CRUD-Operations-on-SQL-Table-Using-External-Content-Type-in-SharePoint.jpg";
import img2 from "../Asset/Best-Desk-Setup-for-Software-Engineers.jpg";
import img3 from "../Asset/Untitled_design_(12)_1600925482551_1600925492949.avif";
import img4 from "../Asset/images.jpeg";
import img5 from "../Asset/TicTacToe_OG-logo.jpg";
import img6 from "../Asset/maxresdefault.jpg";
import About from "./About";
import { AiFillGithub } from "react-icons/ai";

const projectDetails = [
  {
    img: <img className="h-[220px] rounded-md" src={img1} alt="" />,
    projectName: "CRUD Operation",
    language: [{
      title: "JavaScript",
    },
    {
      title: "HTML",

    },
    {
      title: "CSS",

    },
    ],
    


  },
  {
    img: <img className="h-[220px] rounded-md" src={img3} alt="" />,
    projectName: "Wikipedia Search",
    language: [{
      title: "JavaScript",
    },
    {
      title: "HTML",

    },
    {
      title: "CSS",

    },
    
    ],
    
  },
  {
    img: <img className="h-[220px] w-80 rounded-md" src={img4} alt="" />,
    projectName: "Calculator",
    language: [{
      title: "JavaScript",
    },
    {
      title: "HTML",

    },
    {
      title: "CSS",

    },
    ],
    
  },
  {
    img: <img className="h-[220px] rounded-md" src={img5} alt="" />,
    projectName: "Tic Tac Toe",
    language: [{
      title: "Tkinter",
    },
    {
      title: "Python",

    },
    
    ],
    
  },
  {
    img: <img className="h-[220px] rounded-md" src={img2} alt="" />,
    projectName: "Student Management System",
    language: [{
      title: "Python",
    },
    {
      title: "Tkinter",

    },

   
    ],
    
  },
  {
    img: <img className="h-[220px] rounded-md" src={img6} alt="" />,
    projectName: "Excel to JSON Converter",
    language: [{
      title: "Flask",
    },
    
    {
      title: "ReactJS"

    },
    {
      title: "HTML"
    },
    {
      title: "MongoDB"
    }
    ],
    
  },
];

const skillsDetails = [
  {
    title: "HTML",
    color: "#11396C",
  },
  {
    title: "CSS",
    color: "#995DB5",
  },
  {
    title: "Bootstrap",
    color: "#e36544",
  },
  {
    title: "Python",
    color: "#3875A9",
  },
  {
    title: "JavaScript",
    color: "#11396C",
  },
  {
    title: "SQL",
    color: "#E48E00",
  },
  {
    title: "React Js",
    color: "#61DBFB",
  },
  {
    title: "Node Js",
    color: "#76B859",
  },
  {
    title: "Express Js",
    color: "#D5BA31",
  },
  {
    title: "Flask",
    color: "#90D2D9",
  },
  {
    title: "MongoDB",
    color: "#439C34",
  },
  {
    title: "REST API",
    color: "#0595D4",
  },
  {
    title: "PWA",
    color: "#6600ED",
  },
  {
    title: "Electron Js",
    color: "#6600ED",
  },
  {
    title: "Tailwind",
    color: "#0595D4",
  },
];

const Projects = () => {
  return (
    <>
   <div className="p-5">
   
      <About/>
        <div className="text-white justify-center items-center  mt-10 flex flex-col">
          <h1 className="font-bold text-2xl underline underline-offset-8">Skills</h1>
          <div className="flex flex-wrap mt-10 w-3/4 gap-4">
            {skillsDetails.map((item) => (
              <div
                style={{ backgroundColor: `${item.color}` }}
                className=" bg-rose-600 rounded-lg p-2 w-40 text-center"
              >
                <button>{item.title}</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mt-20 mb-10">
            <h1 className="text-white text-3xl font-bold text-center underline">
              Projects
            </h1>
          </div>

          <div className=" flex justify-center flex-wrap mt-5">
            {projectDetails.map((item) => (
              <div className="h-84 bg-[#1E3851] shadow-2xl border rounded-md  flex flex-wrap  m-4 ">
                
                <div className="w-80 object-cover">
                  
                  <h1>{item.img }   </h1><AiFillGithub className="left-50  -right-1/4 bottom-40"/> 
                  <div className="p-4 flex flex-col">
                    <h1 className="text-xl mb-1 font-semibold text-white">
                      {item.projectName}
                    </h1>
                    <div className="flex ">
                      {
                        item.language.map((lang, index) => (
                          <button className="mt-2 rounded-md w-24 mr-2 p-1 bg-[#496e97] text-white" key={index}>{lang.title}</button>

                        ))
                      }
                  


                    </div> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="flex justify-center mt-10">
        <button className=" bg-[#152a41] p-2 rounded-lg w-40 shadow-md shadow-gray-600 text-lg font-medium text-white">Show More</button>

        </div>

      </div>
    </>
  );
};

export default Projects;
