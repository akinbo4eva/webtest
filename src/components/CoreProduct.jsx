import React from 'react';
import CurveGreen from '../assets/images/curvegreen.svg';
import arrowRight from '../assets/icons/arrowRight.png';
import { cardData } from '../util/CardData';
import CardProducts from './CardProducts';

function CoreProduct() {
	return (
		<div className='bg-[#F4FDF8]'>
			<img src={CurveGreen} alt='' />
			<div className='px-[120px] bg-[#E5FBEF] pb-[113px]'>
				<div className='w-full flex justify-between items-center'>
					<h1 className='text-[40px] text-[rgba(10, 9, 3, 0.7)] font-semibold opacity-70'>
						Our core <span className='text-[#008037]'>products</span>{' '}
					</h1>
					<img src={arrowRight} alt='' />
				</div>
				<p className='text-[24px] text-[rgba(10, 9, 3, 0.7)] font-light mt-[32px] mb-[64px] w-[732px] opacity-70'>
					Lörem ipsum prektigt decifin homonera disam. Blinga oda planade.
					Krodeskapet pseudogen till antebåning.
				</p>
				<div className='flex space-x-6'>
					{cardData.map((item, i) => (
						<CardProducts key={i} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CoreProduct;
