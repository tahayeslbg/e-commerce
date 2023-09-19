import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
	const { className, children, ...rest } = props;
	return (
		<button
			className={` py-4 px-2 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-200 disabled:cursor-not-allowed transition-all duration-100 text-white font-medium ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
