"use client";

import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-full py-4 px-4 lg:px-40 flex justify-between items-center bg-zinc-800 text-white">
      <h1 className="text-2xl font-bold">R</h1>
      <div className="grid gap-1 cursor-pointer md:hidden">
        <div className="h-0.75 w-6 bg-white rounded-full" />
        <div className="h-0.75 w-6 bg-white rounded-full" />
        <div className="h-0.75 w-6 bg-white rounded-full" />
      </div>
      <ul className="hidden md:flex md:space-x-8 md:text-base">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`hover:underline ${
                pathname === link.href ? "underline" : ""
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
