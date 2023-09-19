"use client";
import React, { FC } from "react";
import { Product } from "@/types/product";
import ProductSlide from "./ProductSlide";
import Rating from "./Rating";
import Button from "./Button";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart-slice";

interface ProductProps {
	product: Product;
}

const Product: FC<ProductProps> = ({ product }) => {
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
		<main className='main_container grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 my-20'>
			<div>
				<ProductSlide productImages={product.images} />
			</div>
			<div className='space-y-5'>
				<h1 className='text-5xl font-bold'>{product.title}</h1>
				<p className='text-3xl font-medium'>{product.brand}</p>
				<p className='text-slate-500 max-w-[600px]'> {product.description} </p>
				<Rating rating={product.rating} />
				<p className='text-3xl font-medium'>{product.price}$</p>
				<Button className='w-full' onClick={() => handleAddToCart(product)}>
					{" "}
					Add to cart
				</Button>
			</div>
		</main>
	);
};

export default Product;
