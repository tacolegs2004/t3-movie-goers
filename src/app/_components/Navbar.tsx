import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { type HTMLAttributeAnchorTarget } from "react";

type TNavbar = {
  name: string;
  route: string;
  id: number;
  target?: HTMLAttributeAnchorTarget;
};

export default function Navbar() {
  const navItems: TNavbar[] = [
    { name: "Home", route: "/", id: 0 },
    { name: "Search", route: "/search", id: 1 },
    {
      name: "Login",
      route:
        "https://enough-penguin-19.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F",
      id: 2,
    },
    {
      name: "Github",
      route: "https://github.com/tacolegs2004/movie-goers",
      id: 3,
      target: "_blank",
    },
  ];

  return (
    <header className="sticky flex h-[68px] w-full justify-between bg-slate-400 p-8">
      <Link
        href="/"
        className="-mt-4 ml-4 text-2xl font-bold transition-all hover:text-3xl hover:font-extrabold dark:text-white dark:hover:text-black"
      >
        MovieGoers
      </Link>

      <nav className="-pr-8 -mr-10 flex flex-row items-center justify-center gap-8 sm:ml-24">
        <ul className="mt-4 rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700 md:dark:bg-gray-900">
          {navItems.map((item) => (
            <Link
              href={item.route}
              key={item.id}
              className="rounded px-3 py-2 text-xl font-semibold text-black transition-all hover:text-2xl md:visible md:bg-transparent md:p-0 dark:text-white"
              target={item.target ? "_blank" : ""}
              aria-label={item.name}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div
          className="mr-12"
          id="profile-pic"
          aria-label="Your profile picture"
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
