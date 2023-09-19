import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='bg-orange-100 py-20'>
			<div className='main_container grid grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
				<div className='space-y-4'>
					<Link href={"/"} className='text-xl font-bold'>
						Furnitureee
					</Link>
					<p className='text-slate-700 text-sm max-w-[200px]'>
						4517 Washington Ave. Manchester, Kentucky 39495
					</p>
				</div>
				<div className='flex flex-col space-y-4'>
					<h6 className='text-xl font-bold'>Quick Links</h6>
					<Link href={"/"} className='text-sm text-slate-700'>
						Gallery
					</Link>
					<Link href={"/"} className='text-sm text-slate-700'>
						About us
					</Link>
					<Link href={"/"} className='text-sm text-slate-700'>
						Buy online
					</Link>
				</div>
				<div className='flex flex-col space-y-4'>
					<h6 className='text-xl font-bold'>Policy</h6>
					<Link href={"/"} className='text-sm text-slate-700'>
						Terms & Conditions
					</Link>
					<Link href={"/"} className='text-sm text-slate-700'>
						Privacy Policy
					</Link>
				</div>
				<div className='flex flex-col space-y-4'>
					<h6 className='text-xl font-bold'>Social</h6>
					<Link href={"/"} className='text-sm text-slate-700'>
						Facebook
					</Link>
					<Link href={"/"} className='text-sm text-slate-700'>
						Instagram
					</Link>
					<Link href={"/"} className='text-sm text-slate-700'>
						Linkedin
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
