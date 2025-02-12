import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Account created successfully!');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/profile');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Header />
            <section className="bg-white dark:bg-[#1c1d1f] -z-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 dark:bg-[#212426]">
                    <h1 className="my-8 text-6xl tracking-wide font-bold bg-gradient-to-r from-[#343739] to-transparent bg-clip-text text-transparent dark:from-[#f9d3b4] dark:to-transparent dark:bg-clip-text dark:text-transparent">
                        Register
                    </h1>
                    <div className="w-full rounded-lg  border shadow md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-[#1c1d1f]">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-black dark:text-white md:text-2xl">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border text-black dark:text-white rounded-lg block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="border text-black dark:text-white rounded-lg block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-black dark:text-white">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirm-password"
                                        id="confirm-password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                {success && <p className="text-sm text-green-500">{success}</p>}
                                <button
                                    type="submit"
                                    className="text-white bg-[#524840] hover:bg-[#1c1d1f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-center text-black dark:text-white">
                                    Already have an account?{' '}
                                    <a href="/login" className="font-medium text-primary-600 hover:underline">
                                        Login here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Register;

