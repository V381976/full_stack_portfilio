export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div  className="
              backdrop-blur-sm 
              bg-blue/100 
              border border-blue/90
              rounded-xl 
              p-6 
              text-center
              shadow-lg
              transition-all
              hover:bg-sky-200
              hover:shadow-md
             
             
            ">
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
 