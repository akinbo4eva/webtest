import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App relative overflow-clip cursor-default'>
			<Navbar />
			<Header />
			<Features />
			<Articles />
			<Footer />
		</div>
	);
}

export default App;
