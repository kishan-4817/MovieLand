import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully.');
      navigate('/profile');
    } catch (registerError) {
      setError(registerError.message || 'Unable to create account.');
    }
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_30rem]">
          <section className="app-panel rounded-[2rem] p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
              Join MovieLand
            </p>
            <h1 className="mt-4 max-w-xl text-5xl leading-[0.92] sm:text-6xl">
              Create your place for saved favorites, history, and future watchlists.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              This registration flow is now aligned with the new system and ready to grow
              into a richer account experience as the product evolves.
            </p>
          </section>

          <section className="app-panel rounded-[2rem] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
              Register
            </p>
            <h2 className="mt-4 text-4xl">Create your account</h2>

            <form className="mt-8 space-y-4" onSubmit={handleRegister}>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="app-input"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="app-input"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-[var(--text-muted)]">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="app-input"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {error ? <p className="app-alert app-alert-error">{error}</p> : null}

              {success ? <p className="app-alert app-alert-success">{success}</p> : null}

              <button type="submit" className="app-button-primary w-full">
                Create Account
              </button>
            </form>

            <p className="mt-6 text-sm text-[var(--text-muted)]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[var(--accent-gold)]">
                Log in
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
