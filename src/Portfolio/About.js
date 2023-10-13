import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import image from "../Asset/undraw_software_engineer_re_tnjc.svg";
import img1 from "../Asset/undraw_About_me_re_82bv-removebg-preview.png";


const About = () => {
  return (
    <>
      <div className="bg-[#0D2438] p-5">
        <div className=" flex items-center justify-between m-2 mt-5 pb-7 w-full">
          <div className="flex flex-col w-1/2 justify-center items-start ml-5 text-white">
            <h1 className="font-medium text-4xl mb-4">I am Tanisha Priya</h1>
            <h1 className="text-4xl mb-6"> A Software Developer</h1>
            <button className="w-48 text-xl mt-4 font-bold p-3 rounded-lg bg-gray-400">
              {" "}
              <span className="flex  p-1 gap-3 rounded-lg  items-center">
                {" "}
                <AiOutlineDownload size={20} /> Download CV
              </span>
            </button>
          </div>
          <div className="flex w-1/2 mr-5 p-5">
            <img src={image} className="" alt="" />
          </div>
        </div>
      </div>

      <h1 className="text-center text-white text-3xl font-semibold underline mb-10">About Me</h1>

      <div className="bg-[#0D2438] w-full flex  justify-center mb-20">
        <div className="p-2  gap-5 text-white flex  items-center ">
          <div className="flex w-2/5 flex-col p-2">
            <img src={img1} />
           
          </div>
          
          <div className="flex font-roboto font-medium text-lg ml-8 mt-5  flex-col  w-6/12 ">
            <p>
              I am a passionate Software Developer currently working at Garuda
              Mart India Pvt. Ltd. as a part of their dynamic team. My role
              primarily revolves around two exciting projects: Warehouse
              Management and a Software Billing project, both of which are
              integral to the company's operations. I bring a wealth of
              experience as a Software Developer with a strong proficiency in a
              range of technologies, including Python, Flask, React.js, REST
              API, JavaScript, HTML, CSS and PWA. I specialize in crafting robust
              and scalable solutions, with a primary focus on designing and
              optimizing inventory management systems and Software Billing. 
              As a full-stack developer, I take pride in ensuring a seamless integration of
              front-end and back-end components. I thrive on solving complex
              problems and am dedicated to delivering high-quality software
              solutions that meet the unique needs. <br/>
             
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
