import React from "react";

const Contact = () => {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="text-white text-center ">
        <h1 className="font-medium text-3xl underline mb-10">Contact Form</h1>
        <div class=" flex justify-center items-center p-3">
          <div className=" sm:border  md:rounded-lg p-10">
            <form className=" flex flex-col" onSubmit={onSubmitForm}>
              <div className="flex flex-wrap">
                <div className=" flex flex-col items-start m-2 w-full sm:w-auto">
                  <label
                    className="text-sm mr-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="name"
                  >
                    Customer Name
                  </label>
                  <input
                    class="flex h-10 xs:w-full sm:w-60 md:w-80 rounded-md border mt-3 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-300"
                    type="text"
                    placeholder="Enter Your name"
                    id="name"
                    name="customerName"
                   
                  />
                </div>
                <div className="flex flex-col items-start m-2 w-full sm:w-auto">
                  <label
                    class="text-sm  mr-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="number"
                  >
                    Email Id
                  </label>
                  <input
                    class="flex h-10  xs:w-full sm:w-60 md:w-80 rounded-md border mt-3 border-gray-300  bg-transparent px-3 py-2 text-sm placeholder:text-slate-300"
                    type="email"
                    id="number"
                    placeholder="Enter Your Email"
                    name="customerNumber"
                    
                  />
                </div>
              </div>
              <div className="flex flex-col items-start m-2 w-full ">
                <label
                  class="text-sm  mr-3 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="number"
                >
                  Subject
                </label>
                <input
                  class="flex h-10 w-full  md:w-[660px] rounded-md border mt-3 border-gray-300  bg-transparent px-3 py-2 text-sm placeholder:text-slate-300"
                  type="text"
                  id="billDate"
                  name="employeeId"
                  placeholder="Subject"

                />
              </div>

              <div className="flex flex-col items-start m-2 mt-3 w-full ">
                <label
                  class="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="address"
                >
                  Message
                </label>
                <textarea
                  className=" flex rounded-md border border-gray-300  bg-transparent px-3 py-2 text-sm  mt-3
               placeholder:text-slate-300 md:w-[660px] w-full h-20"
                  type="textarea"
                  id="address"
                  rows=""
                  cols=""
                  placeholder="Enter Your Message"
                  name="customerAddress"
               
                ></textarea>
              </div>

              <div className="flex justify-center  mt-2 ">
                <div className="bg-sky-500 h-10 pl-2 pr-2 w-40 text-lg font-medium cursor-pointer  rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500">
                  <label>Send Message</label>
                  <input type="button" className="" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
