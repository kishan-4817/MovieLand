import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div>
            <>
                <Header />
                <div class="flex flex-auto items-center justify-center text-center px-4 flex-col sm:flex-row h-screen" bis_skin_checked="1">
                    <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:dark:border-slate-300/10 dark:text-slate-200">About</h1>
                    <h2 class="mt-2 text-lg text-slate-700 dark:text-slate-400 sm:mt-0">This is the about page.</h2>
                </div>
                <Footer />
            </>
        </div>
    );
};  

export default About;