import './css/ProjectList.css'
import Project from './Project.tsx';
import { ProjectData } from './Project.tsx';

const ProjectList = () => {
	const projects: ProjectData[] = [
		{ title: "Options Exchange Simulator", description: "A simulation of a continuous double auction (CDA) options market using the Black-Scholes-Merton pricing model and lognormal asset price simulation."},
		{ title: "Git Goin'", description:""}
	]

	return (
		<div className="projects-container">
			{ 
				projects.map((project) => {
					return <Project key={project.title} title={project.title} description={project.description}/>
				})
			}
		</div>
	);
}

export default ProjectList;
