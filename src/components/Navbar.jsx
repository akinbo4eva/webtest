import React from 'react';
import Logo from '../assets/images/sayswitchlogo.svg';
import Keydown from '../assets/icons/Keyboard arrow down.svg';

const Navbar = () => {
	return (
		<div className='w-full h-[160px] flex justify-between items-center px-[120px] bg-[#F4FDF8]'>
			<div>
				<img src={Logo} alt='' />
			</div>
			<div className='flex space-x-[64px]'>
				<div className='flex items-center space-x-[32px]'>
					<li className='flex items-center text-[32px] text-[#0A0903] font-medium'>
						Products{' '}
						<span className='ml-[15px]'>
							<img src={Keydown} alt='' />
						</span>{' '}
					</li>
					<li className='flex items-center text-[32px] text-[#0A0903] font-medium'>
						Businesses{' '}
						<span className='ml-[15px]'>
							<img src={Keydown} alt='' />
						</span>
					</li>
					<li className='text-[32px] text-[#0A0903] font-medium'>About</li>
					<li className='text-[32px] text-[#0A0903] font-medium'>Careers</li>
				</div>
				<button className='outline-none w-[219px] h-[62px] bg-[#DAF1E4] rounded-[15px] text-[32px] text-[#008037]'>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Navbar;
