import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/icons/logo.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";

const Navbar = () => {
	const [navDisplay, setNavDisplay] = useState(false);
	return (
		<div className={navDisplay ? "nav fixed-nav" : "nav"}>
			<div>
				<img src={logo} alt='logo' />
			</div>
			<div className='flex justify-between items-center gap-8 md:hidden'>
				<span className=' opacity-60 hover:opacity-90'>
					<button href='#'>Home</button>
				</span>
				<span className=' opacity-60 hover:opacity-90'>
					<button href='#'>About</button>
				</span>
				<span className=' opacity-60 hover:opacity-90'>
					<button href='#'>Contact</button>
				</span>
				<span className=' opacity-60 hover:opacity-90'>
					<button href='#'>Blog</button>
				</span>
				<span className=' opacity-60 hover:opacity-90'>
					<button href='#'>Careers</button>
				</span>
			</div>
			<div className='lg:hidden'>
				<Button />
			</div>
			<div
				className='hidden md:block'
				onClick={() => setNavDisplay((prevDisplay) => !prevDisplay)}
			>
				<img src={navDisplay ? close : hamburger} alt='hamburger' />
			</div>
			{navDisplay && (
				<div className='bg-gray-600/30 backdrop-blur-sm w-[100%] h-[100%] fixed left-0 top-[60px] z-[100]'>
					<div className='mt-[20px] mx-auto grid text-[16px] text-center gap-4 w-[90%] bg-white rounded-md font-medium py-8'>
						<span className=' opacity-70 hover:opacity-90'>
							<button href='#'>Home</button>
						</span>
						<span className=' opacity-70 hover:opacity-90'>
							<button href='#'>About</button>
						</span>
						<span className=' opacity-70 hover:opacity-90'>
							<button href='#'>Contact</button>
						</span>
						<span className=' opacity-70 hover:opacity-90'>
							<button href='#'>Blog</button>
						</span>
						<span className=' opacity-70 hover:opacity-90'>
							<button href='#'>Careers</button>
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
