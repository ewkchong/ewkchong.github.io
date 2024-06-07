import type { Metadata } from "next";
import NavBar from "./ui/nav-bar";
import { zedMono } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
	title: "Edward Chong",
	description: "A website about a software developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={zedMono.className + " max-w-screen-md mx-auto"}>
				<NavBar />
				<main className="mt-8 mx-10"> {children} </main>
			</body>
		</html>
	);
}
