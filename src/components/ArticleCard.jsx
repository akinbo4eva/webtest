import React from "react";
import ArticleImage from "./ArticleImage";
import { motion } from "framer-motion";

const ArticleCard = ({ title, content, author }) => {
	return (
		<motion.div
			className='rounded-xl bg-white lg:max-w-[350px] lg:mx-auto max-w-[375px] cursor-pointer hover:bg-gray-100 shadow-md hover:shadow-lg'
			animate={{
				scale: 1,
			}}
			initial={{
				scale: 0.5,
			}}
			transition={{
				type: "spring",
				duration: 0.7,
			}}
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 0.9,
			}}>
			<ArticleImage title={title} />
			<div className='p-4'>
				<span className='text-xs'>{author}</span>
				<h4 className='opacity-80 text-lg my-2'>{title}</h4>
				<p className='opacity-60 leading-normal text-sm'>{content}</p>
			</div>
		</motion.div>
	);
};

export default ArticleCard;
