import Navbar from './components/Navbar';
import Header from './components/Header';
import CoreProduct from './components/CoreProduct';
import PaymentSection from './components/PaymentSection';
import FinanceSection from './components/FinanceSection';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';

function App() {
	return (
		<div className='w-full max-w-[1728px] m-auto'>
			<div className='bg-[#F4FDF8]'>
				<Navbar />
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

export default App;
