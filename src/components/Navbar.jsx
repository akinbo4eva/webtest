import React, { useState } from 'react';
import Logo from '../assets/images/sayswitchlogo.svg';
import Keydown from '../assets/icons/Keyboard arrow down.svg';
import logo from '../assets/icons/logo.svg';
import hamburger from '../assets/icons/icon-hamburger.svg';
import close from '../assets/icons/icon-close.svg';
import arrowright from '../assets/icons/chevron-forward-outline (2).svg';
import arrowback from '../assets/icons/chevron-back-outline (2).svg';
import {Link, useHistory} from 'react-router-dom'

const Navbar = ({ isLabel, setIsLabel }) => {
	const [navDisplay, setNavDisplay] = useState(false);
	const [mobileDisplay, setMobileDisplay] = useState('');
	const history = useHistory()

	const isLabelHandler = (identifier) => {
		if (isLabel === identifier) {
			setIsLabel('');
		} else {
			setIsLabel(identifier);
		}
	};


	const clearHandler = () => {
		setNavDisplay(false);
		setMobileDisplay('');
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
						<Link to='/about'>About</Link>
					</li>
					<li className='text-[16px] text-[#0A0903] font-medium cursor-pointer relative before:w-0 before:h-1 before:absolute before:top-[-15px] before:right-0 before:bg-green-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-green-600'>
						<Link to='/careers'>Careers</Link>
					</li>
				</div>
				<button onClick={() => history.push('/contact')} className='outline-none py-[12px] px-[20px] bg-[#DAF1E4] rounded-[15px] text-[18px] text-[#008037] lg:hidden'>
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
					<div className='mt-[20px] mx-auto grid text-[16px] text-center gap-4 w-[90%] bg-white rounded-md font-medium py-8 px-10 relative'>
						<div
							onClick={() => setMobileDisplay('products')}
							className='select-none opacity-70 hover:opacity-90'>
							<li className='flex items-end'>
								Products{' '}
								<span
									className={`ml-[5px] ${
										isLabel === 'products' && 'transition-all rotate-180'
									}`}>
									<img src={arrowright} alt='' className='w-4 h-4' />
								</span>{' '}
							</li>
						</div>
						<div
							onClick={() => setMobileDisplay('business')}
							className='select-none opacity-70 hover:opacity-90'>
							<li className='flex items-end'>
								Businesses
								<span
									className={`ml-[5px] ${
										isLabel === 'products' && 'transition-all rotate-180'
									}`}>
									<img src={arrowright} alt='' className='w-4 h-4' />
								</span>{' '}
							</li>
						</div>
						<div className='select-none opacity-70 hover:opacity-90'>
							<li className='flex items-end'><Link to='/about' >About</Link></li>
						</div>
						<div className='select-none opacity-70 hover:opacity-90'>
							<li className='flex items-end'>Careers</li>
						</div>

						{mobileDisplay !== '' ? (
							<div className='absolute top-0 left-0 w-full h-full z-200 bg-white flex px-10 py-5'>
								<div onClick={clearHandler} className='flex h-5'>
									<span className='mr-2 flex items-center'>
										<img
											src={arrowback}
											alt=''
											className='w-4 h-4 text-black'
										/>
									</span>
									<h2 className='text-black font-extrabold'>{mobileDisplay}</h2>
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
