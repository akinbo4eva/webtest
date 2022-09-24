import React from "react";
import Button from "./Button";
import mockup from "../assets/images/image-mockups.png";

const Header = () => {
	return (
		<div className='flex px-[10%] py-44 header relative overflow-x-clip lg:block lg:pb-24'>
			<img
				className='absolute top-[-110px] right-[-225px] lg:static select-none lg:mt-[-280px] z-10'
				src={mockup}
				alt='mockups'
			/>
			<div className='relative md:mt-12 sm:mt-20'>
				<div className='max-w-[37rem] lg:w-full lg:text-center lg:mx-auto'>
					<h1 className='text-[64px] opacity-90 select-none leading-tight sm:text-[40px] xs:text-[36px]'>
						Next generation digital banking
					</h1>
					<p className='opacity-60 text-lg my-6 leading-relaxed select-none font-medium'>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
				</div>
				<div className='lg:mx-auto w-fit'>
					<Button />
				</div>
				<div className='flex space-x-[24px]'>
					<button className='outline-none w-[354px] h-[87px] bg-[#DAF1E4] rounded-[15px] text-[32px] text-[#008037]'>
						Log In
					</button>
					<button className='outline-none w-[354px] h-[87px] bg-[#008037] rounded-[15px] text-[32px] text-[#DAF1E4]'>
						Create account
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
