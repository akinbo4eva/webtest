import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
	return (
		<div className='px-[10%] py-24 bg-white articles'>
			<h1 className='text-[40px] opacity-90 lg:text-center sm:text-[32px]'>Latest Articles</h1>
			<div className='grid grid-cols-4 lg:gap-12 mt-8 lg:grid-cols-2 md:grid-cols-1 gap-2'>
				<div className='transition-transform ease-in-out'>
					<ArticleCard
						title={"Receive money in any currency with no fees"}
						content={
							"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
						}
						author={"By Claire Robinson"}
					/>
				</div>
				<div className='transition-transform ease-in-out'>
					<ArticleCard
						title={"Treat yourself without worrying about money"}
						content={
							"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
						}
						author={"By Wilson Hutton"}
					/>
				</div>
				<div className='transition-transform ease-in-out'>
					<ArticleCard
						content={
							"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
						}
						title={"Take your Easybank card wherever you go"}
						author={"By Wilson Hutton"}
					/>
				</div>
				<div className='transition-transform ease-in-out'>
					<ArticleCard
						content={
							"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
						}
						title={"Our invite-only Beta accounts are now live!"}
						author={"By Claire Robinson"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Articles;
