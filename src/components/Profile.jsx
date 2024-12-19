import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.displayName || 'No display name available');
            setEmail(user.email || 'No email available');
            setPhotoURL(user.photoURL || 'No photo available');
        }
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-12">
                <div className="relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">Profile</h2>
                    {user ? (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-700">Name</label>
                                <p className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
                                    {name}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-700">Email</label>
                                <p className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
                                    {email}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-lg font-medium text-gray-700">Photo</label>
                                {photoURL !== 'No photo available' ? (
                                    <img
                                        src={photoURL}
                                        alt="Profile"
                                        className="mt-1 w-24 h-24 rounded-full border shadow-md"
                                    />
                                ) : (
                                    <p className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">
                                        {photoURL}
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500">No user is signed in.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
