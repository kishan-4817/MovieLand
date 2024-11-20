import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div>
            <>
                <Header />
                    <div className="container">
                        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:space-x-8 px-4 py-12 lg:py-24 sm:px-6 sm:py-16 lg:px-16">
                            <div className="lg:w-1/2 xl:w-1/3 p-6">
                                <div className="flex flex-col space-y-6">
                                    <div className="text-lg font-medium text-slate-900 dark:text-slate-200">
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras vitae diam elit. Sed vitae nibh vel nisl tincidunt pulvinar. Sed in leo auctor, scelerisque lacus ut, lacinia lacus.</p>
                                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cras vitae diam elit. Sed vitae nibh vel nisl tincidunt pulvinar. Sed in leo auctor, scelerisque lacus ut, lacinia lacus.</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200">Recent Posts</h2>
                                        <ul className="space-y-4">
                                            <li className="flex items-center">
                                                <img src="https://picsum.photos/200" alt="" className="w-12 h-12 rounded-full mr-4" />
                                                <div>
                                                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-200">Post 1</h3>
                                                    <p className="text-sm text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-center">
                                                <img src="https://picsum.photos/200" className="w-12 h-12 rounded-full mr-4" alt="" />
                                                <div>
                                                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-200">Post 2</h3>
                                                    <p className="text-sm text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-center">
                                                <img src="https://picsum.photos/200" className="w-12 h-12 rounded-full mr-4" alt=""  />
                                                <div>
                                                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-200">Post 3</h3>
                                                    <p className="text-sm text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <a href="/" className="inline-block px-6 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 xl:w-2/3">
                                <img src="https://picsum.photos/600" alt="" className="rounded-lg shadow-lg" />
                            </div>
                        </div>       
                    </div>            
                <Footer />
            </>
        </div>
    );
};  

export default About;