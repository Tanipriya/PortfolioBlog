import React from "react";

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
const financeExp = [
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

const Resume = () => {
  return (
    <>
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
                  <div className="bg-[#1E3851] mb-2 p-4">
                    <h1 className="font-medium text-2xl mt-2">{item.title}</h1>
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
    </>
  );
};

export default Resume;
