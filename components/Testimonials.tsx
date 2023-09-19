"use client";
import React, { FC } from "react";
import Carousel, { ArrowProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JohnSmith from "@/public/images/john_smith_img.png";
import JaneDoe from "@/public/images/jane_doe.png";
import MichaelJohnson from "@/public/images/michael_johnson.png";
import EmilyDavis from "@/public/images/emily_davis.png";
import DavidBrown from "@/public/images/david_brown.png";
import Image from "next/image";

const testimonials = [
	{
		image: JohnSmith,
		fullName: "John Smith",
		title: "Amazing Design",
		description:
			"The quality and design of the furniture really impressed me. I always recommend them to my clients.",
		job: "Freelance Interior Designer",
	},
	{
		image: JaneDoe,
		fullName: "Jane Doe",
		title: "Really Good Placement",
		description:
			"I discovered this furniture when I was redecorating my home. They are both stylish and very practical.",
		job: "Homeowner",
	},
	{
		image: MichaelJohnson,
		fullName: "Michael Johnson",
		title: "High Value Products",
		description:
			"I use this furniture when staging homes for sale and rent. My clients are always satisfied.",
		job: "Real Estate Agent",
	},
	{
		image: EmilyDavis,
		fullName: "Emily Davis",
		title: "Comfortable Sofa's",
		description:
			"We furnished our office with this furniture and our employees are very happy. They are both comfortable and durable.",
		job: "Office Manager",
	},
	{
		image: DavidBrown,
		fullName: "David Brown",
		title: "Amazing!",
		description:
			"We did the decoration of our restaurant with this furniture. Our customers always compliment our decor.",
		job: "Restaurant Owner",
	},
];

const CustomRightArrow: FC<ArrowProps> = ({ onClick }) => {
	return (
		<button
			className='border border-white h-min absolute bottom-0 right-0 p-1.5 rounded-full'
			onClick={() => onClick && onClick()}
		>
			<ChevronRight width={20} height={20} className='stroke-white' />
		</button>
	);
};

const CustomLeftArrow: FC<ArrowProps> = ({ onClick }) => {
	return (
		<button
			className='border border-white h-min absolute bottom-0 right-12 p-1.5 rounded-full'
			onClick={() => onClick && onClick()}
		>
			<ChevronLeft width={20} height={20} className='stroke-white' />
		</button>
	);
};

const Testimonials = () => {
	return (
		<div id='testimonial' className='bg-[#112B3C] my-20 py-20 scroll-m-20'>
			<div className='main_container space-y-20'>
				<h5 className='text-5xl font-bold text-white'>
					What do customers say...
				</h5>
				<Carousel
					arrows
					className="overflow-x-hidden"
					renderArrowsWhenDisabled={true}
					customRightArrow={<CustomRightArrow />}
					customLeftArrow={<CustomLeftArrow />}
					draggable={false}
					autoPlay
					pauseOnHover
					autoPlaySpeed={5000}
					infinite
					swipeable
					responsive={{
						desktop: {
							breakpoint: {
								max: 1920,
								min: 768,
							},
							items: 1,
							partialVisibilityGutter: 24,
						},
						mobile: {
							breakpoint: {
								max: 768,
								min: 0,
							},
							items: 1,
							partialVisibilityGutter: 0,
						},
					}}
					showDots={false}
					slidesToSlide={1}
				>
					{testimonials.map((item, i) => (
						<div
							key={i}
							className='flex justify-center space-x-20 items-center md:flex-col md:space-x-0 md:space-y-20 sm:flex-col sm:space-x-0 sm:space-y-20'
						>
							<Image
								src={item.image}
								width={400}
								height={600}
								alt={item.fullName}
								className='rounded-3xl'
							/>
							<div className='flex flex-col'>
								<span className='text-6xl text-orange-500'> ❝ </span>
								<div className='space-y-5'>
									<h6 className='text-4xl text-white font-bold'>
										{item.title}
									</h6>
									<p className='w-full max-w-lg text-slate-400'>
										{" "}
										{item.description}{" "}
									</p>
									<p className='text-lg font-bold text-orange-500'>
										{" "}
										{item.fullName}{" "}
									</p>
									<p className='text-base font-medium text-slate-400'>
										{" "}
										{item.job}{" "}
									</p>
								</div>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;
