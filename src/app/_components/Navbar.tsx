"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky flex h-[68px] w-screen justify-between bg-slate-400 p-4 text-black md:p-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-semibold transition-all hover:text-2xl"
      >
        MovieGoers
      </Link>

      <nav className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:gap-8">
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
              className="my-2 ml-6 block rounded text-xl font-semibold transition-all hover:text-2xl"
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
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-slate-400 p-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-slate-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <SignInButton />{" "}
              </button>
            </b>
          </SignedOut>
          <SignedIn>
            <span className="-ml-4 w-8 text-xl">
              <UserButton />
            </span>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
