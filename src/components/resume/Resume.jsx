import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Tech-Fusion Technologies
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jul 2020 - Jul 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Design user interactions and structures for web pages, enhancing user engagement.
                  Develop APIs and reusable code, improving software efficiency and maintainability.
                  Collaborate with graphic designers, ensuring cohesive and consistent brand design.
                  Troubleshoot and upgrade software, resolving issues and optimizing performance.
                  Create technical documentation, aiding in clear communication and project reporting.
                </p>
              </div>
               {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Web-App Development
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  IIHT Navsari
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jul 2021 - Jul 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                 Completed a professional course covering front-end and back-end web development technologies. 
                 Gained hands-on experience in HTML, CSS, JavaScript, React, Node.js, and database integration. 
                 Developed responsive web applications and participated in live projects, enhancing skills in full-stack development and modern web frameworks.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Cyber Security (Post Graduate Certificate)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Durham College (CANADA, ON)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Sept 2024 - Sept 2025
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                graduate in Cybersecurity from Durham College, Canada, 
                with hands-on experience in network security, threat analysis, and ethical hacking. 
                Skilled in identifying vulnerabilities, implementing security protocols, 
                and using industry-standard tools such as Wireshark, Metasploit, and Splunk. 
                Passionate about protecting digital assets and staying current with emerging cyber threats.
                </p>
              </div>
               {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor of Engineering(BE) in Computer Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  S S Agrawal College (India, Navsari)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jun 2017 - Jul 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Completed a four-year undergraduate program with a strong foundation in computer science, programming, and engineering principles. 
                  Gained hands-on experience in software development, data structures, algorithms, database systems, and networking. 
                  Participated in academic projects and seminars focused on emerging technologies. 
                  Developed strong problem-solving and analytical skills applicable to real-world IT and engineering challenges.
                </p>
              </div>
               {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  12th Science from GHSEB Board
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Naranlala Higher Secondary School (India, Navsari)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Mar 2015 - Mar 2017
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Completed 12th grade with a focus on Physics, Chemistry, Mathematics, and English. 
                Built a strong academic foundation in scientific and analytical concepts, preparing for further studies in engineering and technology.


                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
