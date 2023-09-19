"use client";
import Image from "next/image";
import React, { FC, useState } from "react";

interface ProductSlide {
	productImages: string[];
}
const ProductSlide: FC<ProductSlide> = ({ productImages }) => {
	const [activeImage, setActiveImage] = useState<string>(productImages[0]);

	return (
		<div>
			<div className='flex flex-col justify-center border items-center space-y-8'>
				<div className='relative w-[300px] h-[300px] flex justify-center items-center'>
					<Image src={activeImage} alt='' fill />
				</div>
				<div className='flex flex-wrap border'>
					{productImages.map((image, i) => (
						<button
							key={i}
							onClick={() => setActiveImage(image)}
							className='relative w-[120px] h-[120px] flex justify-center items-center'
						>
							<Image src={image} alt='' fill className='p-5' />
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductSlide;
