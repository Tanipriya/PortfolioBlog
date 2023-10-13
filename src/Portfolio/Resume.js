import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillCode,
  AiFillCodepenCircle,
  AiFillDashboard,
  AiFillMacCommand,
} from "react-icons/ai";

const techExperience = [
  {
    title: "Software Developer ",
    experience: "Apr 2023 to Present",
    company: "Garuda Mart India Pvt. Ltd., Bangaluru",
    description:
      "As a software developer, I have spearheaded the end-to-end development of a Warehouse Management System and a Software Billing System. Leveraging technologies such as React.js, Flask, MongoDB, REST API, HTML, CSS, JavaScript, and OOP concepts, these systems have streamlined inventory tracking, order management, stock management, and have automated tasks including invoice generation and bill creation. This has significantly reduced paperwork and improved operational efficiency.",
    icon: <AiFillCode />,
    color: "#439C34",
    hoverColor: "#486a8c",
  },
  {
    title: "Full Stack Devloper Trainee ",
    experience: "Jun 2022 - Apr 2023",
    company: "NxtWave, Hybrid",
    description:
      "Trained at CCBP 4.0 Intensive Training Program designed to build skills to develop web applications end-to-end. Proficiency in Programming Foundations with Python and Developer Fundamentals  - Solved several problems covering concepts like Functions and Recursion, Strings, Lists, Dictionaries, Sets, Tuples, etc. Built Static, Responsive, and Dynamic Web Applications from scratch using JS, React JS, Node and Express JS. Built applications like TodoList, Wikipedia Search using HTML, CSS, Bootstrap, JavaScript Experience with Relational and Non-Relational Databases .",
    icon: <AiFillCodepenCircle />,
    color: "#F97316",
    hoverColor: "#486a8c",
  },
  {
    title: "Business Development Manager ",
    experience: "Sept 2018 - Nov 2021",
    company: "India First Life Insurance, Patna",
    description:
      "As a Business Development Manager, Generated leads from exciting bank customer's and  Worked closely with clients and create finacial portfolio for customers.  Worked with persistency leads and maintained the customer and company bonding, generated revenue from closing the deals. ",
    icon: <AiFillDashboard />,
    color: "#11396C",
    hoverColor: "#486a8c",
  },
  {
    title: "Senior Relationship Manager ",
    experience: "Oct 2017 - Aug 2018",
    company: "Reliance Nippon Life Insurance, Patna",
    description:
      "Provide support in Sales of Life Insurance business through direct marketing. Sought out new clients and developed clientele by networking to find new customers and generate lists of prospective clients. Identified business prospect through cold calling, marketing, and database leads.",
    icon: <AiFillMacCommand />,
    color: "#2FA499",
    hoverColor: "#486a8c",
  },
];

const certificate = [
  {
    name: "Python",
    Link: "https://certificates.ccbp.in/intensive/programming-foundations?id=HVYDFUBFVO",
    topic:
      "Learned foundations with Python and Developer Fundamentals Solved several problems covering concepts like Functions, Recursion, Strings, Lists, Dictionaries, Sets, Tuples, Loops & OOP Concepts etc.",
    color: "#11396C",
    bgColor: "#1b4569",
  },
  {
    name: "SQL",
    Link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=DFEKEFMEZK",
    topic:
      "Learned how to Querying with SQL, Aggregations and Group By, Modelling Database and Joins. Experience with Relational and Non-Relational Databases  ",
    color: "#11396C",
    bgColor: "#075470",
  },

  // {
  //   name: "Responsive Web Design ",
  //   Link: "https://certificates.ccbp.in/intensive/flexbox?id=AFPZTYEGCO",
  //   topic:
  //     "learned CSS Flexbox, CSS Media Queries, CSS Box Sizing, Developing Responsive Layouts and built Food Restaurant Websites and  Landing Page. ",
  //   color: "#995DB5",
  //   bgColor: "#80328f",
  // },

  // {
  //   name: "Build Static Website",
  //   Link: "https://certificates.ccbp.in/intensive/static-website?id=BKVYWTLEKT",
  //   topic:
  //     "Learned Basics of HTML5, CSS3, CSS Box Model, Introduction of Bootstrap and Flex Layout, Bootstrap Utility Classes and Components, Website Layout Development and built websites like tourism and etc ",
  //   color: "#e36544",
  //   bgColor: "#b84f3e",
  // },
  {
    name: "Developer Foundations",
    Link: "https://certificates.ccbp.in/intensive/developer-foundations?id=LHFIHOSLPU",
    topic:
      "Learned Fundamentals of Computer Science, Work with command line, ES6 & ES7 & ES8 Features and Collaborating with Git ",
    color: "#11396C",
    bgColor: "#075470",
  },
  {
    name: "Build Responsive Website",
    Link: "https://certificates.ccbp.in/intensive/responsive-website?id=ZJXIVMSDIM",
    topic:
      "Learns how to style your site quickly with Bootstrap. I also learn how to add logic to your CSS styles and extend them with Sass. Later, I also built a TO-Do list using CURD methods other Websites.",
    color: "#075470",
    bgColor: "#426ca1",
  },
  {
    name: "Programming Using Python",
    Link: "https://olympus1.mygreatlearning.com/course_certificate/CAADHPEZ",
    topic:
      "Learned foundations with Python and Developer Fundamentals Solved several problems covering concepts like Functions, Recursion, Strings, Lists, Dictionaries, Sets, Tuples, Loops & OOP Concepts etc. ",
    color: "#075470",
    bgColor: "#426ca1",
  },
  {
    name: "JavaScript Essentials",
    Link: "https://olympus1.mygreatlearning.com/course_certificate/CAADHPEZ",
    topic:
      "Built Static, Responsive, and Dynamic Web Applications from scratch using JS Built applications like TodoList using HTML, CSS, Bootstrap, JavaScript ",
    color: "#075470",
    bgColor: "#426ca1",
  },
  // {
  //   name: "Dynamic Web Application",
  //   Link: "https://olympus1.mygreatlearning.com/course_certificate/CAADHPEZ",
  //   topic:
  //     "Learned how to write back end apps with Node.js and npm. I also built web applications with the Express framework, and build some mini-projects ",
  //   color: "#027DA9",
  //   bgColor: "#075470",
  // },
];

const Resume = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="text-white font-semibold text-4xl mt-10 underline">
        Resume
      </h1>
      <div className=" text-white ">
        <div className="flex w-full p-10 items-center justify-center ">
          <div className="flex flex-col w-[1000px]  p-5">
            <div>
              {techExperience.map((item, index) => {
                return (
                  <div className="flex m-5 ">
                    <div className="flex ml-10  flex-col items-center justify-center">
                      <h1
                        className="bg-sky-500 p-2 rounded-full text-xl outline outline-slate-200 "
                        style={{ background: `${item.color}` }}  
                      >
                        {item.icon}
                      </h1>
                      <div className="w-[2px] h-full bg-white"></div>
                    </div>
                    <div className="flex ml-10 w-full" >
                      <div className="flex w-5 h-1 border-t-[15px] border-t-transparent border-r-[15px] border-r-[#1e3851] border-b-[10px] border-b-transparent"></div>
                      <div
                        className=" bg-[#1e3851] w-10/12 rounded-r-lg  border-b-4 border-b-blue-400 p-4">
                        <h1 className="font-medium text-2xl mt-1 ">
                          {item.title}
                        </h1>
                        <p className="text-[10px]">{item.experience}</p>
                        <h1 className="font-medium text-lg">{item.company}</h1>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 mb-20">
        <h1 className="text-white  font-medium mb-10 text-4xl underline npm start">
          Certificates
        </h1>
        <div className="flex flex-wrap   justify-center">
          {certificate.map((item, index) => (
            <div
              className="bg-[#1E3851] shadow-xl w-80 h-auto text-white mt-5 mr-10 p-4 rounded-lg    border-b-4 border-b-blue-400"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor:
                  hoveredIndex === index ? item.color : item.hoverColor,
              }}
            >
              <h1 className="font-medium text-lg">
                <span className="font-medium text-lg">Name: </span>
                {item.name}
              </h1>
              <p className="text-[12px] h-[90px]">{item.topic}</p>
              <div className="flex mt-2">
                <button>
                  <a
                    href={item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <span
                      style={{ backgroundColor: `${item.bgColor}` }}
                      className="flex  p-1 gap-1 rounded-lg  items-center"
                    >
                      <AiFillCaretDown /> Download Certificate
                    </span>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
