
const ProjectCard = (props) => {
    const projects = props.projects

    return(
        <>
            {projects.map((project,index) => (
                project.color == "blue" ? (
                    <div className="bg-gray-800 w-60 p-2 pb-8 rounded-xl shadow-lg shadow-blue mb-8 mr-8">
                        <img className="w-60 h-40 pb-2 rounded-2xl" src={project.image}/>
                        <h3 className="text-sm font-bold pb-2 px-1 leading-tight tracking-tight">{project.name}</h3>
                        <p className="text-xs text-justify px-1 pb-2">{project.desc}</p>
						<div className="flex">
							{project.language.map((lang,index) => (
								<div className="mr-1 bg-black shadow-md shadow-blue text-xxs hover:underline w-fit rounded-full p-1 px-1.5 col-span-1 ">
									<p>{lang}</p>
								</div>
							))}
						</div>
                    </div>
                ) : (
                    <div className="bg-gray-800 w-60 p-2 pb-8 rounded-xl shadow-lg shadow-red mb-8 mr-8">
						<img className="w-60 h-40 pb-2 rounded-2xl" src={project.image}/>
						<h3 className="text-sm font-bold pb-2 px-1 leading-tight tracking-tight">{project.name}</h3>
						<p className="text-xs text-justify px-1 pb-2">{project.desc}</p>
						<div className="flex">
							{project.language.map((lang,index) => (
								<div className="mr-1 bg-black shadow-md shadow-red text-xxs hover:underline w-fit rounded-full p-1 px-1.5 col-span-1 ">
									<p>{lang}</p>
								</div>
							))}
						</div>
               		</div>
                )
            ))}
        </>
    )
}



export default ProjectCard