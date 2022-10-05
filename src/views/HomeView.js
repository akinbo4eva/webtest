import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CoreProduct from '../components/CoreProduct';
import PaymentSection from '../components/PaymentSection';
import FinanceSection from '../components/FinanceSection';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';

function HomeView({isLabel, setIsLabel}) {

	return (

		<div className='w-full max-w-[1728px] m-auto scrollbar-hide relative'>
			<div className='bg-[#F4FDF8] scrollbar-hide'>
				<Navbar isLabel={isLabel} setIsLabel={setIsLabel} />
				<Header />
			</div>
			
			<CoreProduct />
			<PaymentSection />
			<FinanceSection />
			<Sponsor />
			<Footer />

			
		</div>
	);
}

export default HomeView;
