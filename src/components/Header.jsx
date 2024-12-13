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
import { Link } from 'react-router-dom'

export default function Header() {
  const [user] = useAuthState(auth)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#1f2123] shadow-neu">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h3 className="text-4xl tracking-wide font-bold bg-gradient-to-r from-[#f9d3b4] to-transparent bg-clip-text text-transparent">
          MovieLand
          </h3>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          
          <Link to="/" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
            About
          </Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
            Contact
          </Link>
          <Link to="/blog" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
            Blog
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-6">
          {user ? (
            <Link to="/profile" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
              Profile
            </Link>
          ) : (
            <>
              <Link to="/Login" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
                Log in
              </Link>
              <div className="h-6 w-px bg-gray-300/50" aria-hidden="true" />
              <Link to="/Register" className="text-sm font-semibold leading-6 text-white hover:text-[#f9d3b4]">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1f2123] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MovieLand</span>
              <h3 className="text-4xl tracking-wide font-bold bg-gradient-to-r from-[#f9d3b4] to-transparent bg-clip-text text-transparent">
              MovieLand
              </h3>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                {user ? (
                  <Link
                    to="/profile"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/Login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      Log in
                    </Link>
                    <div className="h-6 w-px bg-gray-300/50" aria-hidden="true" />
                    <Link
                      to="/Register"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
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

