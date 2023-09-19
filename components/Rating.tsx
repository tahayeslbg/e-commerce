import React from "react";
import { Star } from "lucide-react";
const Rating = ({ rating }: { rating: number }) => {
	return (
		<div>
			{Math.round(rating) > 4.5 ? (
				<div className='flex items-center'>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
				</div>
			) : Math.round(rating) > 3.5 ? (
				<div className='flex items-center'>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star width={16} height={16} className=' stroke-yellow-500' />
				</div>
			) : Math.round(rating) > 2.5 ? (
				<div className='flex items-center'>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
				</div>
			) : Math.round(rating) > 1.5 ? (
				<div className='flex items-center'>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
				</div>
			) : Math.round(rating) > 0.5 ? (
				<div className='flex items-center'>
					<Star
						width={16}
						height={16}
						className='fill-yellow-500 stroke-yellow-500'
					/>
					<Star width={16} height={16} className='stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
				</div>
			) : (
				<div className='flex items-center'>
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className='stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
					<Star width={16} height={16} className=' stroke-yellow-500' />
				</div>
			)}
		</div>
	);
};

export default Rating;
