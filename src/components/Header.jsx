'use client'

import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';
import DarkModeSwitch from './DarkModeSwitch';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Movie Search', to: '/movie-search' },
];

export default function Header() {
  const [user] = useAuthState(auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--text-primary)] backdrop-blur-xl dark:border-white/8 dark:bg-[rgba(11,15,19,0.76)] dark:text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4 lg:flex-1">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-panel)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)] transition duration-300 group-hover:border-[var(--accent-gold)]/45 group-hover:bg-[var(--surface-elevated)] dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
              ML
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)] dark:text-white/45">
                Cinema Journal
              </p>
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-[var(--text-primary)] dark:text-white">
                MovieLand
              </h3>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <DarkModeSwitch />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-panel)] p-3 text-[var(--text-primary)] transition duration-300 hover:border-[var(--accent-gold)]/45 hover:text-[var(--accent-gold)] dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--text-muted)] transition duration-300 hover:text-[var(--accent-gold)] dark:text-white/72"
            >
              {item.label}
            </Link>
          ))}
        </PopoverGroup>

        <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <Link
              to="/profile"
              className="rounded-full border border-[var(--surface-border)] bg-[var(--surface-panel)] px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-primary)] transition duration-300 hover:border-[var(--accent-gold)]/45 hover:text-[var(--accent-gold)] dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--text-muted)] transition duration-300 hover:text-[var(--accent-gold)] dark:text-white/72"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-[var(--accent-gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#15110b] transition duration-300 hover:bg-[var(--accent-gold-soft)]"
              >
                Join
              </Link>
            </>
          )}
          <DarkModeSwitch />
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto border-l border-[var(--surface-border)] bg-[var(--surface-base)] px-6 py-6 text-[var(--text-primary)] shadow-2xl dark:border-white/10 dark:text-white">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-panel)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)] dark:border-white/10 dark:bg-white/5">
                ML
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)] dark:text-white/45">
                  Cinema Journal
                </p>
                <h3 className="text-2xl font-semibold tracking-[0.08em] text-[var(--text-primary)] dark:text-white">
                  MovieLand
                </h3>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-[var(--surface-border)] bg-[var(--surface-panel)] p-3 text-[var(--text-primary)] transition duration-300 hover:border-[var(--accent-gold)]/45 hover:text-[var(--accent-gold)] dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-10 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)] dark:text-white/40">
                Navigation
              </p>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-panel)] px-4 py-4 text-base font-medium text-[var(--text-primary)] transition duration-300 hover:border-[var(--accent-gold)]/35 hover:text-[var(--accent-gold)] dark:border-white/8 dark:bg-white/4 dark:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)] dark:text-white/40">
                Account
              </p>
              {user ? (
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-2xl bg-[var(--accent-gold)] px-4 py-4 text-base font-semibold text-[#15110b]"
                >
                  Profile
                </Link>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-panel)] px-4 py-4 text-base font-medium text-[var(--text-primary)] dark:border-white/8 dark:bg-white/4 dark:text-white"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-2xl bg-[var(--accent-gold)] px-4 py-4 text-base font-semibold text-[#15110b]"
                  >
                    Join MovieLand
                  </Link>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
