import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

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
    <header className="p-8 flex h-[68px] w-full justify-between bg-slate-400">
      <Link
        href="/"
        className="ml-4 -mt-4 text-2xl font-bold transition-all hover:text-3xl hover:font-extrabold dark:text-white dark:hover:text-black"
      >
        MovieGoers
      </Link>

      <div className="flex flex-row items-center justify-center gap-8 -pr-8 -mr-10 sm:ml-24">
        <ul className="mt-4 rounded-lg p-4 font-medium rtl:space-x-reverse dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
          {navItems.map((item) => (
            <Link
              href={item.route}
              key={item.id}
              className="rounded px-3 py-2 text-xl font-semibold text-black transition-all hover:text-2xl dark:text-white md:visible md:bg-transparent md:p-0"
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
      </div>
    </header>
  );
}
