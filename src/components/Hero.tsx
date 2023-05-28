import './css/Hero.css'

const Hero = () => {
	
	function handleClick() {
		const projects = document.getElementById("projects-header");
		if (projects) {
			projects.scrollIntoView({ behavior: 'smooth'});
		}
	}

	return (
		<div className="hero">
			<h1>I'm Edward.</h1>
			<p>Computer Science and Finance nerd.</p>
			<div className="clear-button" onClick={handleClick}>
				<svg>
					<rect x="0" y="0" fill="none" width="100%" height="100%"/>
				</svg>
				Check out my projects
		  </div>
		</div>
	)
}

export default Hero;
