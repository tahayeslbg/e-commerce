import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
	const { className, ...rest } = props;
	return (
		<input className={` p-5 border border-black ${className}`} {...rest} />
	);
};

export default Input;
