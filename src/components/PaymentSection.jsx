import React from 'react';
import CurveGreen from '../assets/images/curvelight.svg';
import Left from '../assets/images/left.svg';
import { payment } from '../util/CardData';

function PaymentSection() {
	return (
		<div className='bg-[#E5FBEF]'>
			<img src={CurveGreen} alt='' />
			<div className='px-[120px] lg:px-[10px] bg-[#F4FDF8] flex md:flex-col items-start'>
				<div className='flex-1 pt-[46px]'>
					<img src={Left} alt='' />
				</div>
				<div className='flex-1 pl-[78px] md:pl-0'>
					<div className='pt-[35px]'>
						<button className='outline-none w-[180px] h-[46px] bg-[#DAF1E4] rounded-[8px] font-medium text-[20px] text-[#008037] cursor-default'>
							Payments
						</button>
					</div>
					<div className='mt-[64px]'>
						<h1 className='text-[48px] text-[rgba(10, 9, 3, 0.7)] font-semibold opacity-70'>
							Make Payments
						</h1>
						<h1 className='text-[48px] text-[#008037] font-semibold'>
							everywhere
						</h1>
					</div>

					<p className='text-[32px] sm:text-[18px] text-[rgba(10, 9, 3, 0.7)] font-light mt-[32px] mb-[64px] opacity-70'>
						Lörem ipsum prektigt decifin homonera disam. Blinga oda planade.
						Krodeskapet pseudogen till antebåning monovalens milig.
					</p>

					<div>
						{payment.map((item, i) => (
							<div key={i}>
								<h4 className='mb-[12px] text-[24px] sm:text-[20px] text-[#008037] font-medium'>
									{item.header}
								</h4>
								<p className='text-[20px] sm:text-[18px] text-[rgba(10, 9, 3, 0.7)] font-normal mb-[24px] opacity-70'>
									{item.desc}
								</p>
							</div>
						))}
					</div>
					<div className='flex justify-end items-end mt-[40px] mb-[44px]'>
						<button className='outline-none w-[180px] sm:w-full h-[46px] bg-[#DAF1E4] rounded-[8px] font-medium text-[20px] text-[#008037]'>
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentSection;
