import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';

export const zedMono = localFont({
	src: [
		{
			path: './fonts/ZedMonoNerdFont-Extended.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/ZedMonoNerdFont-ExtendedBold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/ZedMonoNerdFont-ExtendedItalic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/ZedMonoNerdFont-ExtendedBoldItalic.ttf',
			weight: '700',
			style: 'italic',
		},
	]
});

export const montserrat = Montserrat({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin']
})
