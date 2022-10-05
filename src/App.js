import {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AboutView from "./views/AboutView";
import HomeView from "./views/HomeView";
import Overlay0ne from './components/Overlay0ne';



function App() {
	const [isLabel, setIsLabel] = useState('');
	return (
		<>

<Switch>
<Route path='/' exact>
<HomeView isLabel={isLabel} setIsLabel={setIsLabel} />
</Route>
<Route path='/about' exact>
	<AboutView isLabel={isLabel} setIsLabel={setIsLabel} />
	</Route>
	
	<Redirect path='*' to='/'/>

	
</Switch>

{isLabel !== '' ? (
				<div
					onClick={() => setIsLabel('')}
					className='absolute top-[72px] left-0 bg-green-600/30 backdrop-blur-sm w-full h-[100%] z-[1000]'>
					<Overlay0ne />
				</div>
			) : (
				''
			)}

		</>

	
	);
}

export default App;
