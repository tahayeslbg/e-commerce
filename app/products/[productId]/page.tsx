import Product from "@/components/Product";
import { Product as ProductType } from "@/types/product";
import React, { FC } from "react";
interface ProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
	const productRes = await fetch(
		`https://dummyjson.com/products/${params.productId}`
	);
	const product: ProductType = await productRes.json();
	return <Product product={product} />;
};

export default ProductPage;
