import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CoreProduct from './components/CoreProduct';
import PaymentSection from './components/PaymentSection';
import FinanceSection from './components/FinanceSection';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import Overlay0ne from './components/Overlay0ne';

function App() {
	const [isLabel, setIsLabel] = useState('');

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

			{isLabel !== '' ? (
				<div
					onClick={() => setIsLabel('')}
					className='absolute top-[72px] left-0 bg-green-600/30 backdrop-blur-sm w-full h-[100%] z-[1000]'>
					<Overlay0ne />
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default App;
