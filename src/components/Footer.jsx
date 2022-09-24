import React from 'react';
import facebook from '../assets/images/jam_facebook-square (1).svg';
import instagram from '../assets/images/akar-icons_instagram-fill (1).svg';
import twitter from '../assets/images/jam_twitter-square (1).svg';
import linkedin from '../assets/images/ant-design_linkedin-outlined (1).svg';

const Footer = () => {
	return (
		<div className='w-full bg-[#003015] px-[120px] lg:px-[10px]'>
			<div className='grid grid-cols-6 lg:grid-cols-4 md:grid-cols-2 lg:gap-y-10 py-[80px]'>
				<div className='md:col-span-2 '>
					<h4 className='mb-[24px] text-[#F4FDF8] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal'>about</li>
				</div>
				<div className='md:col-span-2'>
					<h4 className='mb-[24px] text-[#F4FDF8] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal'>about</li>
				</div>
				<div className='md:col-span-2'>
					<h4 className='mb-[24px] text-[#F4FDF8] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal'>about</li>
				</div>
				<div className='md:col-span-2'>
					<h4 className='mb-[24px] text-[#F4FDF8] text-[32px]'>About</h4>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal mb-[16px]'>
						about
					</li>
					<li className='text-[16px] text-[#CAD1CD] font-normal'>about</li>
				</div>
				<div className='col-span-2 lg:col-span-4 '>
					<h3 className='mb-[24px] text-[#F4FDF8] text-[32px]'>Newsletter</h3>
					<p className='text-[16px] text-[#CAD1CD] font-normal font-sarabunextra'>
						Lörem ipsum koskapet isk och vaväss dinera, mansplaining. Padda
						pronar dit sask.{' '}
					</p>
					<div className='flex items-center my-[24px]'>
						<input
							type='text'
							className='w-[319px] sm:w-full h-[55px] rounded-l-[8px] p-0 m-0 pl-6 outline-none'
						/>
						<button className='p-0 m-0 w-[137px] h-[55px] bg-[#CAD1CD] text-[#003015] text-[24px] rounded-l-0 rounded-r-[8px]'>
							Send
						</button>
					</div>
					<div className='flex space-x-6'>
						<img src={facebook} alt='' className='cursor-pointer' />
						<img src={instagram} alt='' className='cursor-pointer' />
						<img src={linkedin} alt='' className='cursor-pointer' />
						<img src={twitter} alt='' className='cursor-pointer' />
					</div>
				</div>
			</div>
			<div className='px-[20px]'>
				<hr className='bg-[rgba(255, 213, 0, 0.3)] opacity-30' />
			</div>

			<div className='flex sm:flex-col justify-between items-center py-[40px]'>
				<div className='flex space-x-6'>
					<p className='text-[16px] text-[#CAD1CD] font-normal font-sarabunextra'>
						Privacy .
					</p>

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
