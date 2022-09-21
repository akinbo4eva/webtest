import React from 'react';

function CardProducts({ item }) {
	return (
		<div className='w-[480px] h-[340px] rounded-[16px] card-shadow px-[40px] flex flex-col justify-center items-start'>
			<div className='mb-[12px]'>{item.icon}</div>
			<h4 className='mb-[12px] text-[24px] text-[#0A0903] font-medium'>
				{item.title}
			</h4>
			<p className='text-[20px] text-[rgba(10, 9, 3, 0.7)] font-normal opacity-70'>
				{item.desc}
			</p>
		</div>
	);
}

export default CardProducts;
