import { FaSearch } from 'react-icons/fa';  
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Estate</span>
            <span className="text-slate-700">Minder</span> 
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button type="submit" className="ml-2">
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4 items-center">
          <Link href="/">
            <li className="hidden md:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>

          <Link href="/about">
            <li className="hidden md:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>

          <SignedIn>
            <li>
              <UserButton />
            </li>
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <li className="hidden md:inline text-slate-700 hover:underline cursor-pointer">
                Sign in
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}
