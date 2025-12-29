import React from 'react'
 import ProjectCard from '../components/ProjectCard';
function Project() {
   const projects = [
    {
      title: "Country Info ",
      description: "API based country information .",
      tech: "React, REST API",
      github: "#",
      live: "#",
    },
    {
      title: "Login Authentication ",
      description: "JWT based login system.",
      tech: "React, Node.js",
      github: "#",
      live: "#",
    },
    {
      title: "EV Charging Station ",
      description: "Full stack MERN project.",
      tech: "vuejs, Node, MongoDB",
      github: "#",
      live: "#",
    },
  ];
  return (
     <section id="projects" className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-5  bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6  ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Project