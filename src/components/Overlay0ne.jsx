import React from 'react';
import facebook from '../assets/images/jam_facebook-square (1).svg';
import instagram from '../assets/images/akar-icons_instagram-fill (1).svg';
import twitter from '../assets/images/jam_twitter-square (1).svg';
import linkedin from '../assets/images/ant-design_linkedin-outlined (1).svg';

function Overlay0ne() {
	return (
		<div className='w-[1200px] m-auto bg-white border border-solid border-red sticky top-[72px] left-0 opacity-[100%]'>
			<div className='grid grid-cols-6 lg:grid-cols-4 md:grid-cols-2 lg:gap-y-10 py-[80px] px-10'>
				<div className='md:col-span-2 '>
					<h4 className='mb-[24px] text-[#000000] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal'>about</li>
				</div>
				<div className='md:col-span-2'>
					<h4 className='mb-[24px] text-[#000000] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal'>about</li>
				</div>
				<div className='md:col-span-2'>
					<h4 className='mb-[24px] text-[#000000] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal'>about</li>
				</div>
				<div className='md:col-span-2'>
					<h4 className='mb-[24px] text-[#000000] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#000000] font-normal'>about</li>
				</div>
				<div className='col-span-2 lg:col-span-4 '>
					<h3 className='mb-[24px] text-[#000000] text-[32px]'>Newsletter</h3>
					<p className='text-[16px] text-[#000000] font-normal font-sarabunextra'>
						Lörem ipsum koskapet isk och vaväss dinera, mansplaining. Padda
						pronar dit sask.{' '}
					</p>
					<div className='flex items-center my-[24px]'>
						<input
							type='text'
							className='w-[319px] sm:w-full h-[55px] rounded-l-[8px] p-0 m-0 pl-6 outline-none'
						/>
						
					</div>
					<div className='flex space-x-6'>
						<img src={facebook} alt='' className='cursor-pointer' />
						<img src={instagram} alt='' className='cursor-pointer' />
						<img src={linkedin} alt='' className='cursor-pointer' />
						<img src={twitter} alt='' className='cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overlay0ne;
