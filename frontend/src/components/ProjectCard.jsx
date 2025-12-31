export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div  className="
              w-full
        max-w-md            
        mx-auto
        backdrop-blur-sm
       
        rounded-xl
        p-4 sm:p-5
        text-center
        shadow-lg
        transition-all
        hover:bg-sky-200
        hover:shadow-md
        hover:shadow-gray-500">
          
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <p className="mt-3 text-sm text-gray-500">
        <span className="font-medium">Tech:</span> {tech}
      </p>

      <div className="mt-4 flex gap-4 items-center justify-center">
        <a href={github} target="_blank" className="text-yellow-600">
          GitHub
        </a>
        <a href={live} target="_blank" className="text-green-600">
          Demo
        </a>
      </div>
    </div>
  );
}
 
  // <div
  //     className="                                 
  //       w-full
  //       max-w-md            
  //       mx-auto
  //       backdrop-blur-sm
  //       bg-blue-900/70
  //       border border-blue-400/40
  //       rounded-xl
  //       p-4 sm:p-5
  //       text-center
  //       shadow-lg
  //       transition-all
  //       hover:bg-sky-200
  //       hover:shadow-md
  //       hover:shadow-gray-500
  //     "
      
  //   >
  //     <h3 className="text-lg sm:text-xl font-semibold">
  //       {title}
  //     </h3>

  //     <p className="text-gray-200 sm:text-gray-600 mt-2 text-sm sm:text-base">
  //       {description}
  //     </p>

  //     <p className="mt-3 text-sm text-gray-300 sm:text-gray-500">
  //       <span className="font-medium">Tech:</span> {tech}
  //     </p>

  //     <div className="mt-4 flex gap-6 items-center justify-center">
  //       <a
  //         href={github}
  //         target="_blank"
  //         className="text-yellow-400 hover:underline"
  //       >
  //         GitHub
  //       </a>
  //       <a
  //         href={live}
  //         target="_blank"
  //         className="text-green-400 hover:underline"
  //       >
  //         Demo
  //       </a>
  //     </div>
  //   </div>