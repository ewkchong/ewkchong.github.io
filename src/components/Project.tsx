import './css/Project.css'

export type ProjectData = {
	title: string,
	description: string,
}

const Project = (data: ProjectData) => {

	return (
		<div className="project">
			<h2 className="card-text">{data.title}</h2>
			<div className="description card-text">{data.description}</div>
		</div>
	);
}

export default Project;
