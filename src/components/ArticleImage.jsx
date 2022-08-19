import React from "react";
import conffetti from "../assets/images/image-confetti.jpg";
import currency from "../assets/images/image-currency.jpg";
import plane from "../assets/images/image-plane.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";

const ArticleImage = ({ title }) => {
	return (
		<div>
			<img
				src={
					title === "Our invite-only Beta accounts are now live!"
						? conffetti
						: title === "Receive money in any currency with no fees"
						? currency
						: title === "Take your Easybank card wherever you go"
						? plane
						: title === "Treat yourself without worrying about money"
						? restaurant
						: restaurant
				}
				alt={title}
				className='rounded-t-lg h-[156px] w-[100%] select-none'
			/>
		</div>
	);
};

export default ArticleImage;
