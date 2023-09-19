"use client";
import Button from "@/components/Button";
import Rating from "@/components/Rating";
import { removeFromCart, updateQuantity } from "@/redux/features/cart-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Cart = () => {
	const dispatch = useAppDispatch();

	const { items, totalPrice } = useAppSelector(
		(state: RootState) => state.cart
	);

	const handleUpdateQuantity = (productId: number, quantity: number) => {
		dispatch(updateQuantity({ id: productId, quantity }));
	};

	const handleRemoveFromCart = (productId: number) => {
		dispatch(removeFromCart(productId));
	};

	const handleDownload = () => {
		if (typeof window !== "undefined") {
			const data = JSON.parse(localStorage.getItem("cart") || "{}");
			const json = JSON.stringify(data);
			const blob = new Blob([json], { type: "application/json" });
			const href = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = href;
			link.download = "cart.json";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};
	return (
		<main className='main_container py-20 space-y-10'>
			<h1 className='text-5xl font-bold text-center'>Shopping Cart</h1>
			<div className='w-full max-w-[1080px] mx-auto space-y-5'>
				{items.map((item, i) => (
					<div
						key={i}
						className='flex lg:flex-col lg:items-center lg:gap-5 md:flex-col md:items-center md:gap-5 sm:flex-col sm:items-center sm:gap-5 justify-between p-5 border'
					>
						<div className='flex space-x-6 lg:flex-col lg:items-center lg:gap-5 md:flex-col md:items-center md:gap-5 sm:flex-col sm:items-center sm:gap-5'>
							<div className='relative w-20 h-20'>
								<Image
									src={item.thumbnail}
									alt={item.title}
									fill
									className='object-cover'
								/>
							</div>
							<div>
								<h2 className='flex items-center gap-x-3 text-xl font-bold'>
									{item.title} <Rating rating={item.rating} />{" "}
								</h2>
								<p className='text-sm text-slate-500'>{item.brand}</p>
								<p className='text-lg font-medium'>{item.price}$</p>
							</div>
						</div>
						<div className='flex items-center space-x-5'>
							<Button onClick={() => handleRemoveFromCart(item.id)}>
								Remove Product
							</Button>
							<Button
								className='px-5'
								onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
								disabled={item.quantity <= 1}
							>
								-
							</Button>
							<p> {item.quantity} </p>
							<Button
								className='px-5'
								onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
							>
								+
							</Button>
						</div>
					</div>
				))}
				<div className='flex items-center justify-between'>
					<p className='text-2xl font-bold text-end'>
						Total Price: {totalPrice}$
					</p>
					<Button onClick={handleDownload}>Download Cart</Button>
				</div>
			</div>
		</main>
	);
};

export default dynamic(() => Promise.resolve(Cart), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});
