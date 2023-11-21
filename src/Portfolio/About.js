import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import image from "../Asset/undraw_software_engineer_re_tnjc.svg";
import img1 from "../Asset/undraw_About_me_re_82bv-removebg-preview.png";
import "./About.css"


const About = () => {
  return (
    <>
        <div className="bg-[#0D2438] p-5 font-roboto flex md:flex-row flex-col-reverse items-center justify-between m-2 mt-5 pb-7 w-full">
          <div className="flex flex-col w-full md:w-1/2 mt-20 mb-10 md:mt-0  justify-center items-center md:items-start sm:ml-5 text-white xs:w-full">
            <h1 className="font-medium mb-4 text-2xl md:text-4xl ">I am <span className="text-[#6C63FF] text-3xl md:text-4xl">Tanisha Priya</span></h1>
            <h1 className="text-2xl md:text-4xl mb-6 " > A Software <span className="text-[#6C63FF] text-3xl md:text-4xl">Developer.</span></h1>
            <button className=" pl-7 pr-7 pt-2 pb-2 text-xl mt-2 sm:mt-4 font-medium  rounded-lg bg-[#6C63FF] flex items-center justify-center hover:bg-[#8680ec]">
             
              <AiOutlineDownload size={25} />
              <span className="flex p-1  rounded-lg  items-center ml-2">
                
                 Download CV
              </span>
            </button>
          </div>
          <div className="flex w-full md:w-1/2 mr-5 p-5">
            <img src={image} className="aboutimg " alt="" />
          </div>
        </div>

      <h1 className="text-center mt-10 text-white text-3xl font-semibold underline underline-offset-8">About Me</h1>

        <div className="bg-[#0D2438] w-full flex-col md:flex-row justify-center mb-20  gap-5 text-white flex  items-center ">
          <div className="flex   w-full  md:w-1/2 flex-col p-2 ">
            <img src={img1} alt="" className=""/>
           
          </div>
          
          <div className="flex  p-2 mt-5  flex-col w-full md:w-1/2  ">
            <p className="font-medium text-xs  sm:text-base text-justify">
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
    </>
  );
};

export default About;
