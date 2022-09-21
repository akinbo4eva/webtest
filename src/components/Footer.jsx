import React from 'react';
import Button from './Button';
import logo from '../assets/icons/light-logo.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import instagram from '../assets/icons/icon-instagram.svg';
import pinterest from '../assets/icons/icon-pinterest.svg';
import twitter from '../assets/icons/icon-twitter.svg';
import youtube from '../assets/icons/icon-youtube.svg';

const Footer = () => {
	return (
		<div className='w-full bg-[#003015] px-[120px]'>
			<div>Empty</div>
			<div className='px-[20px]'>
				<hr className='bg-[rgba(255, 213, 0, 0.3)] opacity-30' />
			</div>

			<div className='flex justify-between items-center py-[40px]'>
				<div className='flex space-x-6'>
					<p className='text-[16px] text-[#CAD1CD] font-normal font-sarabunextra'>Privacy .</p>

					<p className='text-[16px] text-[#CAD1CD] font-normal'>Policy .</p>
					<p className='text-[16px] text-[#CAD1CD] font-normal'>Disclaimer</p>
				</div>
				<p className='text-[16px] text-[#CAD1CD] font-normal'>
					&copy;2022 SaySwitch
				</p>
			</div>
		</div>
	);
};

export default Footer;
