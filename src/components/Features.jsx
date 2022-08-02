import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
	return (
		<div className='px-[10%] py-24 features relative z-[-2] lg:text-center'>
			<div>
				<h1 className='text-[40px] opacity-90 leading-normal sm:text-[32px]'>
					Why choose Easybank?
				</h1>
				<p className='opacity-60 text-lg my-2 font-medium'>
					We leverage Open Banking to turn your bank account into your
					financial hub.
				</p>
				<p className='opacity-60 text-lg my-2 font-medium'>
					Control your finances like never before.
				</p>
			</div>
			<div className='grid grid-cols-4 gap-12 mt-8 lg:grid-cols-2 md:grid-cols-1'>
				<FeatureCard
					title={"Online Banking"}
					content={
						"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
					}
				/>
				<FeatureCard
					title={"Simple Budgeting"}
					content={
						"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
					}
				/>
				<FeatureCard
					title={"Fast Onboarding"}
					content={
						"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
					}
				/>
				<FeatureCard
					title={"Open API"}
					content={
						"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
					}
				/>
			</div>
		</div>
	);
};

export default Features;
