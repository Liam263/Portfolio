import React from "react";

const About = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#0a192f]">
      {/* Skill Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300  ">
        <div className="">
          <p className="text-4xl font-bold  inline border-b-4 border-blue-500">
            Experience
          </p>
          <div className="flex items-center justify-between text-xl">
            <p className="py-4 hover:text-blue-500 hover:cursor-pointer">
              <a href="https://aptglobalenterprise.com/">
                APT Global Enterprise
              </a>{" "}
              | Full Stack Developer
            </p>
            <p>Sydney, NSW | February 2022 - Present</p>
          </div>
          <p className="italic text-slate-500">
            Outsourcing and offshoring software consulting company for small to
            medium company with offices in Sydney and Vietnam
          </p>
          <ul className="flex flex-col gap-2">
            <li className="">
              <p className="font-extrabold  text-lg">
                Developed a dynamic data management application:
              </p>
              <p className="text-slate-500 italic">
                Designed and implemented an automated system that updates the
                database daily, ensuring that Business Analysts have access to
                accurate and up-to-date data for timely decision-making.
              </p>
            </li>
            <li className="">
              <p className="font-extrabold  text-lg">Full stack development:</p>
              <p className="text-slate-500 italic">
                Utilised a range of technologies including SQL, Node.js,
                Express.js, and ReactJS to build, deploy, and maintain the
                application, ensuring seamless integration with existing
                systems.
              </p>
            </li>
            <li className="">
              <p className="font-extrabold  text-lg">
                Collaboration and stakeholder engagement:{" "}
              </p>
              <p className="text-slate-500 italic">
                Worked closely with cross-functional teams, including Business
                Analysts, Product Managers, and UX/UI designers, to gather
                requirements and translate them into functional and technical
                specifications.
              </p>
            </li>
            <li className="">
              <p className="font-extrabold  text-lg">Continuous improvement:</p>
              <p className="text-slate-500 italic">
                Conducted regular code reviews and collaborated with team
                members to refine and enhance the application, incorporating user
                feedback to improve functionality and user experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
