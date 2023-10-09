import React from "react";
import { AiFillCaretDown, AiFillDownSquare, AiOutlineArrowDown } from "react-icons/ai";

const techExperience = [
  {
    title: "Software Developer ",
    experience: "Apr 2023 to Present",
    company: "Garuda Mart India Pvt. Ltd., Bangaluru",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.",
  },
  {
    title: "Full Stack Devloper Trainee ",
    experience: "Jun 2022 - Apr 2023",
    company: "NxtWave, Hybrid",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. ",
  },
  {
    title: "Business Development Manager ",
    experience: "Sept 2018 - Nov 2021",
    company: "India First Life Insurance, Patna",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.",
  },
  {
    title: "Senior Relationship Manager ",
    experience: "Oct 2017 - Aug 2018",
    company: "Reliance Nippon Life Insurance, Patna",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. ",
  },
];
// const financeExp = [
//   {
//     title: "Business Development Manager ",
//     experience: "Sept 2018 - Nov 2021",

//     company: "India First Life Insurance, Patna",
//     description:
//       "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.",
//   },
//   {
//     title: "Senior Relationship Manager ",
//     experience: "Oct 2017 - Aug 2018",

//     company: "Reliance Nippon Life Insurance, Patna",
//     description:
//       "Tolerably earnestly middleton extremely distrusts she boy now not. ",
//   },
// ];

const certificate = [
  {
    name: "Python",
    Link: "https://certificates.ccbp.in/intensive/programming-foundations?id=HVYDFUBFVO",
    topic: "Learned foundations with Python and Developer Fundamentals Solved several problems covering concepts like Functions, Recursion, Strings, Lists, Dictionaries, Sets, Tuples, Loops & OOP Concepts etc.",
    color: "#3875A9",
    bgColor: '#1b4569'
  },
  {
    name: "SQL",
    Link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=DFEKEFMEZK",
    topic: "Learned how to Querying with SQL, Aggregations and Group By, Modelling Database and Joins. Experience with Relational and Non-Relational Databases  ",
    color: '#E48E00',
    bgColor: '#9e6c19'
  },
  
  {
    name: "Responsive Web Design using Flexbox",
    Link: "https://certificates.ccbp.in/intensive/flexbox?id=AFPZTYEGCO",
    topic: "learned CSS Flexbox, CSS Media Queries, CSS Box Sizing, Developing Responsive Layouts and built Food Restaurant Websites and  Landing Page. ",
    color: '#995DB5',
    bgColor: '#80328f'

  },
  
  {
    name: "Build Static Website",
    Link: "https://certificates.ccbp.in/intensive/static-website?id=BKVYWTLEKT",
    topic: "Learned Basics of HTML5, CSS3, CSS Box Model, Introduction of Bootstrap and Flex Layout, Bootstrap Utility Classes and Components, Website Layout Development and built websites like tourism and etc ",
    color: '#e36544',
    bgColor: '#b84f3e'
  },
  {
    name: "Developer Foundations",
    Link: "https://certificates.ccbp.in/intensive/developer-foundations?id=LHFIHOSLPU",
    topic: "Learned Fundamentals of Computer Science, Work with command line, ES6 & ES7 & ES8 Features and Collaborating with Git ",
    color: '#11396C',
    bgColor: '#426ca1'

  },
  {
    name: "Build Responsive Website",
    Link: "https://certificates.ccbp.in/intensive/responsive-website?id=ZJXIVMSDIM",
    topic: "Learns how to style your site quickly with Bootstrap. I also learn how to add logic to your CSS styles and extend them with Sass. Later, I also built a TO-Do list using CURD methods other Websites.",
    color: '#D5BA31',
    bgColor: '#ad9a40'
  },
  {
    name: "Programming Using Python",
    Link: "https://olympus1.mygreatlearning.com/course_certificate/CAADHPEZ",
    topic: "Learned foundations with Python and Developer Fundamentals Solved several problems covering concepts like Functions, Recursion, Strings, Lists, Dictionaries, Sets, Tuples, Loops & OOP Concepts etc. ",
    color: '#027DA9',
    bgColor: '#075470'
  },
  {
    name: "JavaScript Essentials",
    Link: "https://olympus1.mygreatlearning.com/course_certificate/CAADHPEZ",
    topic: "Built Static, Responsive, and Dynamic Web Applications from scratch using JS Built applications like TodoList using HTML, CSS, Bootstrap, JavaScript ",
    color: '#D5BA31',
    bgColor: '#ad9a40'
  },
  {
    name: "Dynamic Web Application",
    Link: "https://olympus1.mygreatlearning.com/course_certificate/CAADHPEZ",
    topic:"Learned how to write back end apps with Node.js and npm. I also built web applications with the Express framework, and build some mini-projects ",
    color: '#027DA9',
    bgColor: '#075470'
  }
];

const Resume = () => {

    
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className=" text-white ">
        <div className="flex w-full p-20 items-center justify-center ">
          <div className="flex   flex-col  w-10/12   p-5">
            <div className="border-l">
              <div className="relative   ml-9 mb-6">
                <div className="mb-10" data-aos="zoom-in">
                  <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-10 ring-8  ring-gray-900 bg-blue-900">
                    <svg
                      aria-hidden="true"
                      class="w-3 h-3  text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  {techExperience.map((item) => (
                    <div className="bg-[#1E3851] mb-5 p-4">
                      <h1 className="font-medium text-2xl mt-1">
                        {item.title}
                      </h1>
                      <p className="text-xs">{item.experience}</p>
                      <h1 className="font-medium text-lg">{item.company}</h1>
                      <h1>{item.description}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col w-full p-5">
            {financeExp.map((item) => (
              <div className="bg-[#1E3851] mb-5 p-4">
                <h1 className="font-medium text-2xl mt-3">{item.title}</h1>
                <p className="text-xs">{item.experience}</p>
                <h1 className="font-medium text-lg">{item.company}</h1>
                <h1>{item.description}</h1>

              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-20">
        <h1  className="text-white  font-medium mb-10 text-4xl underline ">Certificates</h1>
      <div className="flex flex-wrap   justify-center">
        {certificate.map((item) => (
          <div  className= "bg-[#1E3851] shadow-xl w-80 h-auto text-white mt-5 mr-10 p-4 rounded-lg" >
            <h1 className="font-medium text-lg"><span className="font-medium text-lg">Name: </span>{item.name}</h1>
            <p className="text-xs">{item.topic}</p>
            <div className="flex mt-2">
            <button> <a href={item.Link} target="_blank" rel="noopener noreferrer" className=""><span style={{backgroundColor: `${item.bgColor}`}} className="flex  p-1 gap-1 rounded-lg  items-center"> <AiFillCaretDown/> Download Certificate</span></a></button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Resume;
