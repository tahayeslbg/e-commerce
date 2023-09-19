import Image from "next/image";
import React from "react";
import CallToActionImg from "@/public/images/call_to_action_img.jpg";
import { Search } from "lucide-react";

const SearchProducts = () => {
	return (
		<div className='relative my-20'>
			<div className='absolute -top-16 left-1/2 -translate-x-1/2 md:px-14 w-full sm:px-5 max-w-[800px]'>
				<div className='relative w-full'>
					<input
						type='text'
						placeholder='Search your product...'
						className='outline-none p-5 h-32 shadow-2xl w-full'
					/>
					<Search className='absolute top-1/2 right-5 -translate-y-1/2 stroke-slate-300' />
				</div>
			</div>
			<Image
				src={CallToActionImg}
				alt='Call To Action Image'
				width={1920}
				height={600}
				className='object-cover h-[800px]'
			/>
		</div>
	);
};

export default SearchProducts;
