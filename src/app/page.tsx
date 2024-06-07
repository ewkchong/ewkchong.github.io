import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePage } from "./components/AnimatePage";
import './styling.css'
import { montserrat } from "./fonts";
import { EnterIcon } from "@radix-ui/react-icons";
import Project from "./projects/components/Project";
import Link from "next/link";

export const metadata = {
	title: "Home - Edward Chong"
}

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
	return (
		<AnimatePage>
			<main>
				<h1 className="text-4xl font-bold">Edward Chong</h1>
				<h2 className="mt-2 text-white text-md text-opacity-80 italic">SWE Intern @ Motorola Solutions</h2>
				<Avatar className="w-60 h-60 mx-auto mt-6 border-white border-2">
					<AvatarImage src="/gh_profile.jpeg" />
					<AvatarFallback>EC</AvatarFallback>
				</Avatar>
				<section className={montserrat.className + " text-white mt-6 text-md text-opacity-80"}>
					Hi there! I'm Edward, a 4th year UBC student majoring in Computer Science and minoring in Commerce. Right now, I'm doing deep dives into systems programming, backend development, and machine learning! Come chat with me about:
					<ul className="ml-8 mt-2">
						<li className="list-disc">⌨️ your neovim config</li>
						<li className="list-disc">🏸 badminton</li>
						<li className="list-disc"> 🏋️fitness</li>
						<li className="list-disc">⚽️🏎️💨  car soccer</li>
					</ul>
				</section>
			</main>
			<section id="experience" className="mt-16">
				<h2 className="text-4xl font-bold mb-4">Experience</h2>
				<div id="experience-list" className="ml-4">
					<div className="flex relative">
						<div id="moto-content" className="pb-4 pl-10 border-l-4 border-white">
							<div className="bulb"></div>
							<h3 className="text-2xl font-bold">Motorola Solutions</h3>
							<h3 className="text-sm italic">Software Engineering Intern, Backend</h3>
							<p className={montserrat.className + " mt-4 text-sm"}>access control in C/C++ 🚪</p>
						</div>
					</div>

					<div className="flex">
						<div id="ubc-content" className="pb-4 pl-10 border-l-4 border-white">
							<div className="bulb"></div>
							<h3 className="text-2xl font-bold">UBC Web Services</h3>
							<h3 className="text-sm italic">Web Support Specialist</h3>
							<p className={montserrat.className + " mt-4 text-sm"}>web applications with JavaScript and PHP 🖥️</p>
						</div>
					</div>
				</div>
			</section>
			<section id="projects" className="mt-16">
				<h2 className="text-4xl font-bold">Projects</h2>
				<h3 className={montserrat.className + " text-md mt-4"}>Here is a list of the projects I've worked on and the skills I've acquired. For more details, check out my dedicated <Link className="underline" href="/projects">projects page</Link>.</h3>
				<div id="project-list" className="">
					<Project
						name="Knowledge Base"
						desc="Obsidian-inspired markdown note-taking application using Electron and GraphQL"
						link="https://github.com/ewkchong/knowledge-base"
						tech={["TypeScript", "React", "d3.js", "Electron", "Apollo GraphQL"]}
					/>
					<Project
						name="Kafka Clone"
						desc="A distributed event streaming platform; Apache Kafka recreated with Go and gRPC"
						link="https://github.com/ewkchong/distributed-log"
						tech={["Go", "gRPC", "Raft"]}
					/>
				</div>
			</section>
		</AnimatePage>
	);
}

