import { montserrat } from "@/app/fonts"
import "./Project.css"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type ProjectProps = {
	name: string
	desc: string
	link: string
	tech: string[]
}

export default function Project(props: ProjectProps) {
	const { name, desc, link, tech } = props
	return (
		<div className="my-8">
			<span className="flex">
				<h3 className="text-2xl font-bold">{name}</h3>
				<span className="flex items-center ml-4">
					<Link href={link}><GitHubLogoIcon className="w-5 h-5"/></Link>
				</span>
			</span>
			<h3 className={ montserrat.className + " text-md italic"}>{desc}</h3>
			<div className={ montserrat.className + " tech-stack"}>
				{
					tech &&
					tech.map(t => {
						return <span key={t} className="tech">&bull; {t}</span>
					})
				}
			</div>
		</div>
	)
}
