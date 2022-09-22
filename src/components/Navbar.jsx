import React, { useState } from 'react';
import Logo from '../assets/images/sayswitchlogo.svg';
import Keydown from '../assets/icons/Keyboard arrow down.svg';
import logo from '../assets/icons/logo.svg';
import hamburger from '../assets/icons/icon-hamburger.svg';
import close from '../assets/icons/icon-close.svg';

const Navbar = ({ isLabel, setIsLabel }) => {
	const [navDisplay, setNavDisplay] = useState(false);
	const isLabelHandler = (identifier) => {
		setIsLabel(identifier);
	};
	return (
		<div
			className={`w-full h-[72px] flex justify-between items-center px-[120px] lg:px-[10px] ${
				isLabel ? 'bg-green-600 sticky top-0 left-0 z-[2000]' : 'bg-[#F4FDF8]'
			} `}>
			<div>
				<img
					className='select-none hidden md:block'
					src={logo}
					alt='logo'
					width='40px'
					height='40px'
				/>
				<img src={Logo} alt='' className='block md:hidden' />
			</div>
			<div className={`flex  ${navDisplay ? 'space-x-0' : 'space-x-[64px]'}`}>
				<div className='flex items-center space-x-[32px] md:hidden'>
					<li
						onClick={() => isLabelHandler('products')}
						className='flex items-center text-[16px] text-[#0A0903] font-medium cursor-pointer relative before:w-0 before:h-1 before:absolute before:top-[-15px] before:right-0 before:bg-green-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-green-600'>
						Products{' '}
						<span
							className={`ml-[15px] ${
								isLabel === 'products' && 'transition-all rotate-180'
							}`}>
							<img src={Keydown} alt='' />
						</span>{' '}
					</li>
					<li
						onClick={() => isLabelHandler('business')}
						className='flex items-center text-[16px] text-[#0A0903] font-medium cursor-pointer relative before:w-0 before:h-1 before:absolute before:top-[-15px] before:right-0 before:bg-green-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-green-600'>
						Businesses{' '}
						<span
							className={`ml-[15px] ${
								isLabel === 'business' && 'transition-all rotate-180'
							}`}>
							<img src={Keydown} alt='' />
						</span>
					</li>
					<li className='text-[16px] text-[#0A0903] font-medium cursor-pointer relative before:w-0 before:h-1 before:absolute before:top-[-15px] before:right-0 before:bg-green-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-green-600'>
						About
					</li>
					<li className='text-[16px] text-[#0A0903] font-medium cursor-pointer relative before:w-0 before:h-1 before:absolute before:top-[-15px] before:right-0 before:bg-green-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-green-600'>
						Careers
					</li>
				</div>
				<button className='outline-none py-[12px] px-[20px] bg-[#DAF1E4] rounded-[15px] text-[18px] text-[#008037] lg:hidden'>
					Contact Us
				</button>
				<div
					className='hidden md:block'
					onClick={() => setNavDisplay((prevDisplay) => !prevDisplay)}>
					<img
						className='select-none'
						src={navDisplay ? close : hamburger}
						alt='hamburger'
					/>
				</div>
			</div>
			{navDisplay && (
				<div className='bg-gray-600/30 backdrop-blur-sm w-full h-[100%] fixed left-0 top-[72px] z-[100]'>
					<div className='mt-[20px] mx-auto grid text-[16px] text-center gap-4 w-[90%] bg-white rounded-md font-medium py-8'>
						<span className='select-none opacity-70 hover:opacity-90'>
							<button href='#'>Home</button>
						</span>
						<span className='select-none opacity-70 hover:opacity-90'>
							<button href='#'>Businesses</button>
						</span>
						<span className='select-none opacity-70 hover:opacity-90'>
							<button href='#'>About</button>
						</span>
						<span className='select-none opacity-70 hover:opacity-90'>
							<button href='#'>Careers</button>
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
