import React from "react";
import { motion } from "framer-motion";

const Button = () => {
	return (
		<motion.div transition={{ type: "spring" }} whileTap={{ scale: 0.9, rotate: 2 }}>
			<button
				href='#'
				className='bg-gradient-to-r from-[#31d35c] to-[#2bb7da] rounded-3xl pb-[10px] pt-[8px] px-9 text-white font-medium cursor-pointer select-none z-auto'>
				Request Invite
			</button>
		</motion.div>
	);
};

export default Button;
