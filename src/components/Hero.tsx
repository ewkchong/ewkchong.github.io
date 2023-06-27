import './css/Hero.css'
import Button from './Button.tsx';

const Hero = () => {

	/* function handleClick() {
		const projects = document.getElementById("projects-header");
		if (projects) {
			projects.scrollIntoView({ behavior: 'smooth' });
		}
	} */

	return (
		<div className="hero">
			<h1>I'm Edward.</h1>
			<p>Computer Science and Finance nerd.</p>

			<Button text="Email" href="mailto:eddiewchong@outlook.com" />
			<Button text="Projects" href="https://github.com/ewkchong" />
			<Button text="LinkedIn" href="https://linkedin.com/in/ewkchong" />
			<Button text="Resume" href="/eddieresume.pdf" />
		</div>
	)
}

export default Hero;
