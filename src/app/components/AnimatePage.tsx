"use client"

import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 20 }
}

export const AnimatePage = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	return (
		<AnimatePresence mode='wait' initial={true}>
			<motion.div
				key={pathname}
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ duration: 0.4, ease: easeInOut }}
				style={{ position: "relative" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
