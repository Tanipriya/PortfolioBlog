import {  AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import React from 'react'

const Footer = () => {

  return (
    <>
    <div className=' flex flex-col justify-center items-center mt-10 '>
      <h1 className="text-white">Follow Me </h1>
      <div>

        <div className="flex m-2 mt-5 mb-5 gap-8 cursor-pointer">
          {/* <AiOutlineFacebook className="text-3xl p-1 bg-slate-400 rounded-lg  hover:bg-transparent hover:bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-white"/> */}
         <AiFillCode className="text-3xl p-1 bg-slate-400 rounded-lg  hover:bg-transparent hover:bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-white"/>
         <AiFillInstagram className= "text-3xl p-1 bg-slate-400 rounded-lg  hover:bg-transparent hover:bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-white"/>
          <AiFillLinkedin className="text-3xl p-1 bg-slate-400 rounded-lg  hover:bg-transparent hover:bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-white" />
          <AiFillGithub className="text-3xl p-1 bg-slate-400 rounded-lg  hover:bg-transparent hover:bg-gradient-to-r from-cyan-500 to-blue-400 hover:text-white"/>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer