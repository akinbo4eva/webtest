import React from "react";
import Button from "./Button";
import logo from "../assets/icons/light-logo.svg";
import facebook from "../assets/icons/icon-facebook.svg";
import instagram from "../assets/icons/icon-instagram.svg";
import pinterest from "../assets/icons/icon-pinterest.svg";
import twitter from "../assets/icons/icon-twitter.svg";
import youtube from "../assets/icons/icon-youtube.svg";

const Footer = () => {
	return (
		<div className='px-[10%] py-16 relative footer text-white flex justify-between items-start lg:block'>
			<div className='flex gap-28 lg:justify-around md:block md:text-center'>
				<div>
					<div className='mb-12'>
						<img src={logo} alt='logo' className='md:mx-auto' />
					</div>
					<div className='flex gap-3 md:max-w-[200px] md:mx-auto md:justify-between'>
						<img src={facebook} alt='facebook' />
						<img src={youtube} alt='youtube' />
						<img src={twitter} alt='twitter' />
						<img src={pinterest} alt='pinterest' />
						<img src={instagram} alt='instagram' />
					</div>
				</div>
				<div className='md:mt-6'>
					<ul className='footer-link-list'>
						<li href='#' className='cursor-pointer'>
							About Us
						</li>
						<li href='#' className='cursor-pointer'>
							Contact
						</li>
						<li href='#' className='cursor-pointer'>
							Blog
						</li>
					</ul>
				</div>
				<div className='md:mt-6'>
					<ul className='footer-link-list'>
						<li href='#' className='cursor-pointer'>
							Careers
						</li>
						<li href='#' className='cursor-pointer'>
							Support
						</li>
						<li href='#' className='cursor-pointer'>
							Privacy Policy
						</li>
					</ul>
				</div>
			</div>
			<div className='grid gap-4 lg:mt-12'>
				<div className='ml-auto lg:mx-auto'>
					<Button />
				</div>
				<div className='ml-auto lg:mx-auto'>
					<span className='opacity-70'>
						© Easybank. All Rights Reserved
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
