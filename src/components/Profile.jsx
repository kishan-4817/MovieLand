import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { ref, get } from 'firebase/database';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        const getUserDetails = async () => {
            const userRef = ref(`users/${user?.uid}`);
            const userSnap = await get(userRef);
            const userData = userSnap.val();
            setName(userData?.name);
            setEmail(userData?.email);
            setPhotoURL(userData?.photoURL);
        }
        if (user) {
            getUserDetails();
        }
    }, [user]);

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-12">
                <div className="relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">Profile</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-gray-700">Name</label>
                            <p className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">{name}</p>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-gray-700">Email</label>
                            <p className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">{email}</p>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-gray-700">Photo URL</label>
                            <p className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2">{photoURL}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;

