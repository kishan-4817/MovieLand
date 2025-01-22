'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  const [user] = useAuthState(auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#ffffff] shadow-md shadow-gray-500/50 dark:bg-[#1f2123] dark:shadow-neu">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h3 className="text-4xl tracking-wide font-bold text-[#343739] dark:bg-gradient-to-r dark:from-[#f9d3b4] dark:to-transparent dark:bg-clip-text dark:text-transparent">
              MovieLand
            </h3>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#343739] dark:text-[#f9d3b4]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4]">
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4]">
            About
          </Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4]">
            Contact
          </Link>
          <Link to="/blog" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4]">
            Blog
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-6">
          {user ? (
            <Link to="/profile" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4] flex items-center">
              Profile
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 dark:text-[#f9d3b4]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-10 0h10zM6 12a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
              </svg>
            </Link>
          ) : (
            <>
              <Link to="/Login" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4]">
                Log in
              </Link>
              <div className="h-6 w-px bg-gray-300/50 dark:bg-gray-700/50" aria-hidden="true" />
              <Link to="/Register" className="text-sm font-semibold leading-6 text-[#343739] dark:text-[#f9d3b4] hover:text-[#f9d3b4]">
                Register
              </Link>
            </>
          )}
        </div>
        <DarkModeSwitch />
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#ffffff] dark:bg-[#1f2123] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MovieLand</span>
              <h3 className="text-4xl tracking-wide font-bold text-[#343739] dark:bg-gradient-to-r dark:from-[#f9d3b4] dark:to-transparent dark:bg-clip-text dark:text-transparent">
                MovieLand
              </h3>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#343739] dark:text-[#f9d3b4]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#343739] dark:text-[#f9d3b4] hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#343739] dark:text-[#f9d3b4] hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#343739] dark:text-[#f9d3b4] hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                {user ? (
                  <Link
                    to="/profile"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#343739] dark:text-[#f9d3b4] hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/Login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#343739] dark:text-[#f9d3b4] hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Log in
                    </Link>
                    <div className="h-6 w-px bg-gray-300/50 dark:bg-gray-700/50" aria-hidden="true" />
                    <Link
                      to="/Register"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#343739] dark:text-[#f9d3b4] hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

