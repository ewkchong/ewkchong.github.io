import './css/Hero.css'
import Button from './Button.tsx';
import { useState } from 'react';

const Hero = () => {

	const [emailHover, setEmailHover] = useState(false);

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

			<a className="hero-link" href="mailto:eddiewchong@outlook.com" target="_blank">
				<div className="clear-button" onMouseEnter={() => setEmailHover(true)}
				onMouseLeave={() => setEmailHover(false)}>
					<svg>
						<rect x="0" y="0" fill="none" width="100%" height="100%" />
					</svg>
					{ emailHover ? "eddiewchong@outlook.com" : "email"}
				</div>
			</a>
			<Button text="Projects" href="https://github.com/ewkchong" />
			<Button text="LinkedIn" href="https://linkedin.com/in/ewkchong" />
			<Button text="Resume" href="/eddieresume.pdf" />
		</div>
	)
}

export default Hero;
