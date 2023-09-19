"use client";
import React, { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import TotalQuantityBadge from "@/components/TotalQuantityBadge";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<nav className='main_container flex justify-between items-center shadow-sm sticky top-0 left-0 bg-white z-50'>
				<Link href={"/"} className='text-xl font-bold'>
					Furnitureee
				</Link>
				<div className='space-x-8 lg:hidden md:hidden sm:hidden'>
					<Link href={"/"}>Home</Link>
					<Link href={"#about-us"}>About us</Link>
					<Link href={"#products"}>Products</Link>
					<Link href={"#testimonial"}>Testimonial</Link>
				</div>
				<div className='flex items-center space-x-8 lg:hidden md:hidden sm:hidden'>
					<Link href={"/"}>Contact us</Link>
					<Link href={"/cart"} className='relative'>
						<ShoppingCart width={24} height={24} />
						<TotalQuantityBadge />
					</Link>
				</div>
				<button
					className='hidden  lg:flex lg:items-center lg:space-x-9 md:flex md:items-center md:space-x-9 sm:flex sm:items-center sm:space-x-9'
					onClick={() => setOpenMenu(prev => !prev)}
				>
					<Link href={"/cart"} className='relative'>
						<ShoppingCart width={24} height={24} />
						<TotalQuantityBadge />
					</Link>
					<Menu width={24} height={24} />
				</button>
			</nav>
			{openMenu ? (
				<div className='hidden lg:fixed lg:top-[60px] lg:left-0 lg:bg-white lg:py-10 lg:px-5 lg:shadow-sm lg:w-full lg:z-50 lg:flex lg:flex-col lg:space-y-5 md:fixed md:top-[60px] md:left-0 md:bg-white md:py-10 md:px-5 md:shadow-sm md:w-full md:z-50 md:flex md:flex-col md:space-y-5 sm:fixed sm:top-[60px] sm:left-0 sm:bg-white sm:py-10 sm:px-5 sm:shadow-sm sm:w-full sm:z-50 sm:flex sm:flex-col sm:space-y-5'>
					<Link href={"/"}>Home</Link>
					<Link href={"#about-us"}>About us</Link>
					<Link href={"#products"}>Products</Link>
					<Link href={"#testimonial"}>Testimonial</Link>
					<Link href={"/"}>Contact us</Link>
				</div>
			) : null}
		</>
	);
};

export default Header;
