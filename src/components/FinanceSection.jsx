import React from 'react';
import CurveGreen from '../assets/images/curvegreen.svg';
import Right from '../assets/images/right.svg';
import { payment } from '../util/CardData';

function FinanceSection() {
	return (
		<div className='bg-[#F4FDF8]'>
			<img src={CurveGreen} alt='' />
			<div className='px-[120px] bg-[#E5FBEF] flex items-start'>
				<div className='flex-1 pl-[78px]'>
					<div className='pt-[35px]'>
						<button className='outline-none w-[180px] h-[46px] bg-[#F1EDDA] rounded-[8px] font-medium text-[20px] text-[#806B00]'>
							Finance
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

					<p className='text-[32px] text-[rgba(10, 9, 3, 0.7)] font-light mt-[32px] mb-[64px] opacity-70'>
						Lörem ipsum prektigt decifin homonera disam. Blinga oda planade.
						Krodeskapet pseudogen till antebåning monovalens milig.
					</p>

					<div>
						{payment.map((item, i) => (
							<div key={i}>
								<h4 className='mb-[12px] text-[24px] text-[#008037] font-medium'>
									{item.header}
								</h4>
								<p className='text-[20px] text-[rgba(10, 9, 3, 0.7)] font-normal mb-[24px] opacity-70'>
									{item.desc}
								</p>
							</div>
						))}
					</div>
					<div className='flex justify-end items-end mt-[40px] mb-[44px]'>
						<button className='outline-none w-[180px] h-[46px] bg-[#F1EDDA] rounded-[8px] font-medium text-[20px] text-[#806B00]'>
							Contact Us
						</button>
					</div>
				</div>
				<div className='flex-1 pt-[46px]'>
					<img src={Right} alt='' />
				</div>
			</div>
		</div>
	);
}

export default FinanceSection;
