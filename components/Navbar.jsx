"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { Links } from "../constants/links";
import { IoMdPulse } from "react-icons/io";
import useMenuActive from "../hooks/useMenuActive";
import LinkItem from "./LinkItem";
const Navbar = () => {
  return (
    <nav className="w-full py-5 dark:bg-dark">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
              Tech Pulse
            </h1>
            <IoMdPulse
              className="text-3xl text-sky-400"
              aria-hidden="true"
            />
          </div>
        </Link>

        <div className="flex gap-8 max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 dark:text-white justify-center">
          {Links.map((link, index) => {
            const isActive = useMenuActive(link.route);
            return (
              <LinkItem
                key={index}
                route={link.route}
                label={link.label}
                isActive={isActive}
              />
            );
          })}
        </div>
        <div className="flex-1 justify-end flex gap-3 items-center">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
