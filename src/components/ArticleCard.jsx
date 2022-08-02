import React from "react";
import ArticleImage from "./ArticleImage";

const ArticleCard = ({ title, content, author }) => {
	return (
		<div className='rounded-xl bg-white lg:max-w-[350px] lg:mx-auto max-w-[375px]'>
			<ArticleImage title={title} />
			<div className='p-4'>
				<span className='text-xs'>{author}</span>
				<h4 className='opacity-80 text-lg my-2'>{title}</h4>
				<p className='opacity-60 leading-normal text-sm'>{content}</p>
			</div>
		</div>
	);
};

export default ArticleCard;
