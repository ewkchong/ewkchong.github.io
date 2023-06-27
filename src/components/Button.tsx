// import './css/Hero.css'

type ButtonProps = {
	text: string;
	href: string;
}

const Button = (props: ButtonProps) => {
	return (
		<a className="hero-link" href={props.href} target="_blank">
			<div className="clear-button">
				<svg>
					<rect x="0" y="0" fill="none" width="100%" height="100%" />
				</svg>
				{props.text}
			</div>
		</a>
	)
}

export default Button;
