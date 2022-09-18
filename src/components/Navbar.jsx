import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/icons/logo.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";

const Navbar = () => {
	const [navDisplay, setNavDisplay] = useState(false);
	return (
		<>
			<div className='h-[82px] lg:h-[64px] w-[100%]'></div>
			<div className='absolute top-0 left-0 right-0 z-[999]'>
				<div className={navDisplay ? "nav fixed-nav" : "nav"}>
					<div>
						<img className='select-none' src={logo} alt='logo' width="40px" height="40px"/>
					</div>
					<div className='flex justify-between items-center gap-8 md:hidden'>
						<span className='select-none opacity-60 hover:opacity-90'>
							<button href='#'>Home</button>
						</span>
						<span className='select-none opacity-60 hover:opacity-90'>
							<button href='#'>About</button>
						</span>
						<span className='select-none opacity-60 hover:opacity-90'>
							<button href='#'>Contact</button>
						</span>
						<span className='select-none opacity-60 hover:opacity-90'>
							<button href='#'>Blog</button>
						</span>
						<span className='select-none opacity-60 hover:opacity-90'>
							<button href='#'>Careers</button>
						</span>
					</div>
					<div className='lg:hidden'>
						<Button />
					</div>
					<div
						className='hidden md:block'
						onClick={() => setNavDisplay((prevDisplay) => !prevDisplay)}>
						<img
							className='select-none'
							src={navDisplay ? close : hamburger}
							alt='hamburger'
						/>
					</div>
					{navDisplay && (
						<div className='bg-gray-600/30 backdrop-blur-sm w-[100%] h-[100%] fixed left-0 top-[60px] z-[100]'>
							<div className='mt-[20px] mx-auto grid text-[16px] text-center gap-4 w-[90%] bg-white rounded-md font-medium py-8'>
								<span className='select-none opacity-70 hover:opacity-90'>
									<button href='#'>Home</button>
								</span>
								<span className='select-none opacity-70 hover:opacity-90'>
									<button href='#'>About</button>
								</span>
								<span className='select-none opacity-70 hover:opacity-90'>
									<button href='#'>Contact</button>
								</span>
								<span className='select-none opacity-70 hover:opacity-90'>
									<button href='#'>Blog</button>
								</span>
								<span className='select-none opacity-70 hover:opacity-90'>
									<button href='#'>Careers</button>
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
