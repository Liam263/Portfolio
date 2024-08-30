import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import hackathon from "../assets/Hackathon2024.png";
const Home = () => {
  return (
    <div name="home" className=" flex items-center w-full h-screen bg-[#0a1927]">
      {/* Intro Container */}
      <div className="w-1/2 mx-auto px-8 flex flex-col justify-center h-full text-gray-200">
        <p className="text-4xl font-bold text-blue-500">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold">Lam Nguyen</h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] max-w-[800px]">
          A final-year student pursuing a Bachelor of Computer Science at the
          University of Wollongong.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          Dedicated and motivated full-stack developer with expertise in
          JavaScript, Java, Node.js, React, and SQL. Achieved top 5% academic
          ranking and Dean’s Merit List award. Experienced in small freelance
          projects that sharpen skills in Web Development and Big Data. Ready to
          bring strong technical skills and analytical prowess to a professional
          setting to drive innovation and success.
        </p>

        <div>
          <button className="group flex border-2 px-6 py-3 my-2 items-center hover:bg-blue-500 hover:border-blue-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <TiArrowRightThick className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      <img src={hackathon} alt="Hackathon2024" className="w-1/3 h-1/2 mr-[100px]"/>
    </div>
  );
};

export default Home;
