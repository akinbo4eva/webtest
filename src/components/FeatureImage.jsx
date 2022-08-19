import React from "react";
import apiIcon from "../assets/icons/icon-api.svg";
import budgetIcon from "../assets/icons/icon-budgeting.svg";
import onboardingIcon from "../assets/icons/icon-onboarding.svg";
import onlineBankingIcon from "../assets/icons/icon-online.svg";

const FeatureImage = ({ title }) => {
	return (
		<div className='my-8'>
			<img
				className='lg:mx-auto cursor-pointer hover:scale-105 transition-transform ease-in-out delay-100 select-none'
				src={
					title === "Online Banking"
						? onlineBankingIcon
						: title === "Simple Budgeting"
						? budgetIcon
						: title === "Fast Onboarding"
						? onboardingIcon
						: title === "Open API"
						? apiIcon
						: apiIcon
				}
				alt={title}
			/>
		</div>
	);
};

export default FeatureImage;
