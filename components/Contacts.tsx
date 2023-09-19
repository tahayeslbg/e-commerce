import Image from "next/image";
import React from "react";
import ContactImg from "@/public/images/about_img.png";
import Input from "./Input";
import Button from "./Button";

const Contacts = () => {
	return (
		<div className='main_container'>
			<div className=' grid grid-cols-2 items-start gap-x-10 lg:grid-cols-1 lg:gap-y-20 md:grid-cols-1 sm:grid-cols-1 md:gap-y-20 sm:gap-y-20'>
				<Image src={ContactImg} alt='' width={600} height={900} />
				<div className='max-w-[700px] space-y-5'>
					<h6 className='text-5xl font-bold'>Contact us</h6>
					<p className='text-slate-500 font-medium max-w-[420px]'>
						Our team would love to hear from you
					</p>
					<div className='space-y-5'>
						<div className='grid grid-cols-2 gap-x-5'>
							<Input placeholder='First Name' />
							<Input placeholder='Last Name' />
						</div>
						<Input className='w-full' placeholder='Email address' />
						<Input className='w-full h-32' placeholder='Message' />
						<Button className='w-full'>Send Message</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
