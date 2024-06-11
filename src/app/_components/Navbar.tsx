"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // const user = useClerk();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 flex h-[68px] w-screen justify-between bg-slate-400 p-4 text-black md:p-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-semibold transition-all hover:text-2xl"
      >
        MovieGoers
      </Link>

      <button
        className="text-2xl md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>

      <nav
        className={`${isOpen ? "flex" : "hidden"} flex-col items-center justify-center gap-4 md:flex md:flex-row md:gap-8`}
      >
        <ul className="mt-16 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:p-0">
          <li key="home" className="md:ml-4">
            <Link
              href={"/"}
              className="block rounded px-3 py-2 text-xl font-semibold transition-all hover:text-2xl"
              aria-label="Home"
            >
              Home
            </Link>
          </li>
          <li key="search" className="md:ml-4">
            <Link
              href={"/search"}
              className="block rounded px-3 py-2 text-xl font-semibold transition-all hover:text-2xl"
              aria-label="Search"
            >
              Search
            </Link>
          </li>
        </ul>

        <div
          className="mt-4 md:ml-4 md:mt-0"
          id="profile-pic"
          aria-label="Your profile picture"
        >
          <SignedOut>
            <b className="mr-4 w-8 text-xl">
              <SignInButton />{" "}
            </b>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
