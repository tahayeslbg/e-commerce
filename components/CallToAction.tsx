import React from "react";
import Arrow from "@/public/images/arrow.svg";
import Image from "next/image";

const CallToAction = () => {
	return (
		<div className='main_container flex justify-center'>
			<div className='w-full max-w-[800px] space-y-8 relative'>
				<h1 className='text-7xl font-bold w-full text-center sm:text-5xl'>
					Amazing furniture for your home
				</h1>
				<p className='text-slate-500 font-medium text-center'>
					We think the chair is the most important piece of furniture in your
					home. Because if you love the chair you are sitting in chances are you
					will love the rest of the room
				</p>
				<Image
					src={Arrow}
					width={200}
					height={200}
					alt='Arrow'
					className='absolute top-5 -right-20 lg:hidden md:hidden sm:hidden'
				/>
			</div>
		</div>
	);
};

export default CallToAction;
