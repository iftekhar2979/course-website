import React from 'react';

const Home = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">Hello Visitor's
                    <span className="dark:text-violet-400">If you passionate to progamming</span>the place is for YOu                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to Coding Home Bd
                    <span className="hidden md:inline lg:hidden">Write Your first Code by Us
    </span>            </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Home;