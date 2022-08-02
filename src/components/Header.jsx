import React from "react";
import Button from "./Button";
import mockup from "../assets/images/image-mockups.png";

const Header = () => {
	return (
		<div className='flex px-[10%] py-44 header relative z-[-1] overflow-x-clip lg:block lg:pb-0'>
			<img
				className='absolute top-[-110px] right-[-225px] lg:relative lg:top-[-280px] lg:left-0 lg:right-0 lg:max-w-[100%]'
				src={mockup}
				alt='mockups'
			/>
			<div className='relative lg:top-[-150px]'>
				<div className='max-w-[27rem] lg:w-full text-center lg:mx-auto'>
					<h1 className='text-[50px] opacity-90 leading-tight sm:text-[40px] xs:text-[36px]'>
						Next generation digital banking
					</h1>
					<p className='opacity-60 text-lg my-6 leading-relaxed font-medium'>
						Take your financial life online. Your Easybank account will be
						a one-stop-shop for spending, saving, budgeting, investing,
						and much more.
					</p>
				</div>
				<div className='lg:mx-auto w-fit'>
					<Button />
				</div>
			</div>
		</div>
	);
};

export default Header;
