import React from 'react';
import HeroMan from '../assets/images/heroman.png';
import HeroWoman from '../assets/images/herowoman.png';
import Arrowmultiple from '../assets/icons/arrowmultiple.svg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Header = () => {
	return (
		<>
			<div className='px-[120px] lg:px-[10px] bg-[#F4FDF8] flex md:flex-col items-center space-x-12 md:space-x-0 mt-10'>
				<div className='flex-1'>
					<h1 className='text-[64px] lg:text-[44px] md:text-[64px] xs:text-[44px] text-[#0A0903] font-bold'>
						Easy Payments,
					</h1>
					<h1 className='text-[64px] lg:text-[44px] md:text-[64px] xs:text-[44px] text-[#008037] font-bold'>
						Everywhere.
					</h1>
					<p className='text-[18px] lg:text-[16px] md:text-[18px] text-[rgba(10, 9, 3, 0.7)] font-light mt-[32px] mb-[64px] opacity-70'>
						Lörem ipsum prektigt decifin homonera disam. Blinga oda planade.
						Krodeskapet pseudogen till antebåning monovalens milig. Krodis benyr
						samt pose om än midest överklassafari. Nynade polypången.{' '}
					</p>

					<div className='flex space-x-[24px] sm:space-x-0 sm:flex-col sm:space-y-8'>
						<button className='outline-none w-[159px] sm:w-full h-[48px] bg-[#DAF1E4] rounded-[15px] text-[18px] text-[#008037]'>
							Log In
						</button>
						<button className='outline-none w-[159px] sm:w-full h-[48px] bg-[#008037] rounded-[15px] text-[18px] text-[#DAF1E4]'>
							Create account
						</button>
					</div>
				</div>
				<div className='flex-1 transition-all md:mt-10'>
					<Carousel
						autoPlay
						infiniteLoop
						interval={5000}
						showThumbs={false}
						showIndicators={false}
						showArrows={false}
						showStatus={false}>
						<div>
							<img src={HeroWoman} alt='' />
						</div>
						<div>
							<img src={HeroMan} alt='' />
						</div>
					</Carousel>
				</div>
			</div>
			<div className='mt-[79px] w-full flex justify-center flex-center bg-[#F4FDF8]'>
				<img src={Arrowmultiple} alt='' />
			</div>
		</>
	);
};

export default Header;
