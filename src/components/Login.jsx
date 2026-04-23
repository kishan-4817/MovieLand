import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (authError) {
      setError(authError.message || 'Unable to sign in right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_30rem]">
          <section className="app-panel rounded-[2rem] p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent-gold)]">
              Welcome Back
            </p>
            <h1 className="mt-4 max-w-xl text-5xl leading-[0.92] sm:text-6xl">
              Return to your next discovery without the clutter.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              The auth flow now follows the same calmer, more cinematic system as the
              homepage so signing in feels like part of the product, not a separate screen.
            </p>
          </section>

          <section className="app-panel rounded-[2rem] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent-gold)]">
              Log In
            </p>
            <h2 className="mt-4 text-4xl">Access your account</h2>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
                  placeholder="name@example.com"
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
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error ? <p className="app-alert app-alert-error">{error}</p> : null}

              <button type="submit" className="app-button-primary w-full" disabled={loading}>
                {loading ? 'Signing In' : 'Sign In'}
              </button>
            </form>

            <p className="mt-6 text-sm text-[var(--text-muted)]">
              Don&apos;t have an account yet?{' '}
              <Link to="/register" className="font-semibold text-[var(--accent-gold)]">
                Create one
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
