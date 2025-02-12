import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (user) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = '/';
        } catch (error) {
            const errorMessage = error.message || 'An error occurred during login.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <section className="dark:bg-[#1c1d1f]">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="my-8 text-6xl tracking-wide font-bold bg-gradient-to-r from-[#343739] to-transparent bg-clip-text text-transparent dark:from-[#f9d3b4] dark:to-transparent dark:bg-clip-text dark:text-transparent">
                        Login
                    </h1>
                    <div className="w-full bg-[#] rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
                                Login to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border border-gray-300 text-gray-700 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="border border-gray-300 text-gray-700 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#524840] hover:bg-[#1c1d1f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    disabled={loading}
                                >
                                    {loading ? 'Signing in...' : 'Sign in'}
                                </button>
                                <p className="text-sm font-light text-center text-gray-700">
                                    Don’t have an account yet?{' '}
                                    <a href="/register" className="font-medium text-primary-600 hover:underline">
                                        Sign up
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

export default Login;

