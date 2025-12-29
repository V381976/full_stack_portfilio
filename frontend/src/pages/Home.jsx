import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Home() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",  
   
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-full py-20 flex items-center "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                         font-bold text-gray-700 leading-tight">
           <span className=" bg-gradient-to-r from-teal-600 to-purple-800 bg-clip-text text-transparent animate-pulse">  Hi, I’m  Devendra</span>
          </h1>
             
          {/* Dynamic Text */}
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl 
                         font-semibold text-sky-700">
           <Typewriter
  options={{
    strings: ["Full-Stack Developer", "React Developer"],
    autoStart: true,
    loop: true,
    cursor:"..",
    
  }}
/>
          </h2>
          

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
           I build modern, scalable web applications using React, Tailwind CSS, Node.js, and MongoDB, focusing on clean design, performance, and real-world problem solving.
          </p>
 
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-200 text-slate-500 px-8 py-4 rounded-md 
                         text-1xl hover:bg-blue-300 transition shadow-lg "
            >
              View Projects
            </a>

            <a
              href="file\_DEVENDRA_SAINI_Resume.pdf"  download
              className="bg-blue-200 text-slate-500 px-8 py-4 rounded-md 
                         text-1xl hover:bg-blue-300 transition shadow-lg  items-center "
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 
                          bg-blue-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative w-56 h-56 sm:w-64 sm:h-64 
                          md:w-80 md:h-80 lg:w-96 lg:h-96 
                          rounded-full
                          flex items-center justify-center 
                          text-blue-600 text-xl font-semibold">
                     <img src="images/image.jpeg"
                        alt="worlg images" 
                        className="rounded-full w-full h-full"
                    />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
