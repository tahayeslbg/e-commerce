import React from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import AboutImg from "@/public/images/about_img.png";

const aboutData = [
	{
		id: "1",
		title: "Mission",
		desc: "Making people feel comfortable and wanting to open up is the key to a successful conversation. This could be an intimate chat with a friend, during a job interview, or during a presentation. Making people feel comfortable and valued builds trust and allows us to establish deeper, more meaningful connections.",
	},
	{
		id: "2",
		title: "Motivation",
		desc: "The perfect blend of art in room decoration is one of the most effective ways to add a unique style to a room. Art pieces can add personality and character to a room, complement the color palette, and even determine the overall theme of the room. Remember, the most important thing is that the artwork reflects your personal taste. It’s a wonderful way to express yourself and make your home feel truly yours.",
	},
	{
		id: "3",
		title: "Vision",
		desc: "The use of negative space in design is a powerful tool that can help to balance out a composition, and provide a place for the eye to rest. Negative space, or ‘white space’, refers to the areas of a design that are left blank, or unmarked. These spaces aren’t necessarily white; they can be any color, texture, or even a pattern.",
	},
	{
		id: "4",
		title: "Goal",
		desc: "Art in a living space should be a reflection of the people who inhabit it. It’s not just about aesthetics or complementing the interior design, but also about expressing the personalities, experiences, and passions of those who live there.",
	},
];

const About = () => {
	return (
		<div id='about-us' className='main_container space-y-10 scroll-m-20'>
			<div className='space-y-5'>
				<h2 className='text-5xl font-bold'>About</h2>
				<p className='text-slate-500 font-medium max-w-[420px]'>
					Comfort is key and how you feel about your chair will affect how you
					feel and your mood
				</p>
			</div>
			<div className='grid grid-cols-2 items-start gap-x-10 lg:grid-cols-1 lg:gap-y-20 md:grid-cols-1 sm:grid-cols-1 md:gap-y-20 sm:gap-y-20'>
				<div className='grid grid-cols-2 gap-8 md:grid-cols-1 sm:grid-cols-1'>
					{aboutData.map((data, i) => (
						<AboutCard
							key={i}
							title={data.title}
							desc={data.desc}
							num={data.id}
						/>
					))}
				</div>
				<div className='flex space-x-10 relative justify-center'>
					<Image src={AboutImg} alt='' />
				</div>
			</div>
		</div>
	);
};

export default About;
