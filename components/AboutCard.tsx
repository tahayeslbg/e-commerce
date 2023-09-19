import React, { FC } from "react";

interface AboutCardProps {
	title: string;
	desc: string;
	num: string;
}

const AboutCard: FC<AboutCardProps> = ({ title, desc, num }) => {
	return (
		<div className='flex flex-col space-y-4'>
			<span className='text-orange-600 text-4xl font-bold'>{num}</span>
			<h3 className='text-xl font-bold'>{title} </h3>
			<p className='text-slate-500'>{desc} </p>
		</div>
	);
};

export default AboutCard;
