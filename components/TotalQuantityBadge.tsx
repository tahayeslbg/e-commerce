"use client";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";
import dynamic from "next/dynamic";

const TotalQuantityBadge = () => {
	const { totalQuantity } = useAppSelector((state: RootState) => state.cart);
	return totalQuantity > 0 ? (
		<div className='w-5 h-5 flex justify-center items-center rounded-full bg-orange-500 text-white text-xs absolute -bottom-3 -right-3 '>
			{totalQuantity}
		</div>
	) : null;
};

export default dynamic(() => Promise.resolve(TotalQuantityBadge), {
	ssr: false,
});
