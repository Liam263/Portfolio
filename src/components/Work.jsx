import React from "react";
import Loading from "../assets/Loading.jpeg";
import MusicBand from "../assets/MusicBand.png";
import WeatherApp from "../assets/Weather_App.png";
import TutorNow from "../assets/TutorNow.png";
import UdemyClone from "../assets/UdemyClone.png";
import BlogArticle from "../assets/BlogArticle.png";
import ShoppingWebsite from "../assets/E-Commerce.png";
import IAG from "../assets/IAG.png";
import { ExternalLink, Github } from "lucide-react";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-500  bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-500">
            Work
          </p>
          <p className="py-6">Check out some of my personal project</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${MusicBand})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 bg-blue-500 size-full flex flex-col items-center justify-center rounded-md">
              <span className="text-2xl font-bold text-white tracking-wide w-fullr">
                Music band website
              </span>
              <div className="pt-8 text-center flex items-center justify-center">
                <a href="https://liam263.github.io/Music-band/" target="_blank">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                    <ExternalLink/> 
                    
                  </button>
                </a>
                <a href="https://github.com/Liam263/Music-band" target="_blank">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    <Github/>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${BlogArticle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 bg-blue-500 size-full flex flex-col items-center justify-center rounded-md">
              <span className="text-2xl font-bold text-white tracking-wide w-fullr">
                Article Blog
              </span>
              <div className="pt-8 text-center flex items-center justify-center">
                <a href="https://front-mentor-1-sooty.vercel.app/">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                    <ExternalLink/> 
                    
                  </button>
                </a>
                <a href="https://github.com/Liam263/frontMentor-1https://github.com/Liam263/frontMentor-1">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    <Github/>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ShoppingWebsite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 bg-blue-500 size-full flex flex-col items-center justify-center rounded-md">
              <span className="text-2xl font-bold text-white tracking-wide w-fullr">
                E-commerce website
              </span>
              <div className="pt-8 text-center flex items-center justify-center">
                <a href="/">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                    <ExternalLink/> 
                    
                  </button>
                </a>
                <a href="https://github.com/Liam263/Shopping-website">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    <Github/>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TutorNow})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 bg-blue-500 size-full flex flex-col items-center justify-center rounded-md">
              <span className="text-2xl font-bold text-white tracking-wide w-fullr">
                Tutor Now
              </span>
              <div className="pt-8 text-center flex items-center justify-center">
                <a href="https://www.tutornow.com.au/">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                    <ExternalLink/> 
                    
                  </button>
                </a>
                <a href="/">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    <Github/>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${IAG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 bg-blue-500 size-full flex flex-col items-center justify-center rounded-md">
              <span className="text-2xl font-bold text-white tracking-wider text-center ">
                Insurance Management
              </span>
              <div className="pt-8 text-center flex items-center justify-center">
                <a href="/">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                    <ExternalLink/> 
                    
                  </button>
                </a>
                <a href="/">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    <Github/>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${UdemyClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 bg-blue-500 size-full flex flex-col items-center justify-center rounded-md  ">
              <span className="text-2xl font-bold text-white tracking-wide w-fullr">
                Udemy Clone
              </span>
              <div className="pt-8 text-center flex items-center justify-center ">
                <a href="https://udemy-clone-psi.vercel.app/" target="_blank">
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                    <ExternalLink/> 
                    
                  </button>
                </a>
                <a
                  href="https://github.com/Liam263/Udemy-clone"
                  target="_blank"
                >
                  <button className="text-center flex gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                    <Github/>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
