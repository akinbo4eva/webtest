import React from 'react';
import CurveGreen from '../assets/images/curvelight.svg';
import Image1 from '../assets/images/sponsor1.svg';
import Image2 from '../assets/images/sponsor2.svg';

function Sponsor() {
	return (
		<div className='bg-[#E5FBEF] overflow-x-hidden'>
			<img src={CurveGreen} alt='' />
			<div className='relative bg-[#F4FDF8] h-[160px] pt-[36px]'>
				<div className='bg-[#F4FDF8] flex items-start space-x-20 animateImage'>
					<img src={Image1} alt='' />
					<img src={Image2} alt='' />
					<img src={Image1} alt='' />
					<img src={Image2} alt='' />
					<img src={Image1} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Sponsor;
