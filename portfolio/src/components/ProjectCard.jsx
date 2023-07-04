const ProjectCard = (props) => {
  const projects = props.projects;

  return (
    <div className="overflow-x-scroll p-4 relative w-11/12 mx-auto sm:flex">
      {projects.map((project, index) =>
        project.color == "blue" ? (
          <div className="bg-gray-800 p-2 pb-8 rounded-xl shadow-lg w-fit shadow-blue mr-8 mb-4">
            <img className="w-96 h-48 sm:h-40 mx-auto pb-2 rounded-2xl" src={project.image} />
            <h3 className="text-sm font-bold pb-2 px-1 leading-tight tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs text-justify px-1 pb-2">{project.desc}</p>
            <div className="bottom-3 flex">
              {project.language.map((lang, index) => (
                <div className="mr-1 bg-black shadow-md shadow-blue text-xxs hover:underline w-fit rounded-full p-1 px-1.5 col-span-1">
                  <p>{lang}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 p-2 pb-8 rounded-xl w-fit shadow-lg shadow-red mr-8 mb-4">
            <img className="w-96 h-48 sm:h-40 mx-auto pb-2 rounded-2xl" src={project.image} />
            <h3 className="text-sm font-bold pb-2 px-1 leading-tight tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs text-justify px-1 pb-2">{project.desc}</p>
            <div className="bottom-3 flex">
              {project.language.map((lang, index) => (
                <div className="mr-1 bg-black shadow-md shadow-red text-xxs hover:underline w-fit rounded-full p-1 px-1.5 col-span-1">
                  <p>{lang}</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectCard;
