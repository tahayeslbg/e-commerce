"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import Button from "./Button";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart-slice";

const ProductCard = ({ product }: { product: Product }) => {
	const dispatch = useAppDispatch();
	const handleAddToCart = (product: Product) => {
		dispatch(
			addToCart({
				title: product.title,
				description: product.description,
				price: product.price,
				quantity: 1,
				brand: product.brand,
				category: product.category,
				discountPercentage: product.discountPercentage,
				id: product.id,
				images: product.images,
				rating: product.rating,
				thumbnail: product.thumbnail,
			})
		);
	};
	return (
		<div className='p-5 border border-slate-300 block space-y-5'>
			<Link href={`/products/${product.id}`} className="space-y-5">
				<div className='h-[220px] relative'>
					<Image
						src={product.thumbnail}
						fill
						alt={product.title}
						className='h-full object-contain'
					/>
				</div>
				<div className='flex justify-between items-center'>
					<h5 className='text-xl font-bold'>{product.title} </h5>
					<Rating rating={product.rating} />
				</div>
				<p className='line-clamp-2 text-slate-500'> {product.description} </p>
				<p className='font-medium'> {product.price}$ </p>
			</Link>
			<Button className='w-full' onClick={() => handleAddToCart(product)}>
				Add to cart
			</Button>
		</div>
	);
};

export default ProductCard;
