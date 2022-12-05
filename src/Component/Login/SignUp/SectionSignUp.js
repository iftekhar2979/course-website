import React from 'react';

const SectionSignUp = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 text-center   xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Coding
			<span className="text-emerald-500 dark:text-emerald-400">Home</span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-emerald-400  text-gray-50">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded  dark:text-gray-50 dark:border-gray-700">Learn more</button>
		</div>
	</div>
</section>
    );
};

export default SectionSignUp;