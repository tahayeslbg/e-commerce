import React from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const Products = async () => {
	const productsRes = await fetch(
		"https://dummyjson.com/products/category/furniture"
	);
	const products = await productsRes.json();

	return (
		<div id='products' className='main_container my-20 space-y-10 scroll-m-20'>
			<h4 className='text-5xl font-bold text-center'>Products</h4>
			<div className='grid grid-cols-4 gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
				{products.products.map((product: Product, i: number) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
