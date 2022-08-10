import React from "react";
import FeatureImage from "./FeatureImage";

const FeatureCard = ({ title, content }) => {
	return (
		<div className='lg:max-w-[350px] lg:mx-auto'>
			<FeatureImage title={title} />
			<h1 className='opacity-80 text-2xl mb-4'>{title}</h1>
			<p className='opacity-60 leading-relaxed font-medium text-sm'>{content}</p>
		</div>
	);
};

export default FeatureCard;
