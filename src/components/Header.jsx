import MenuItems from "./MenuItems";
import { IoHome } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sm:p-6 bg-white text-black dark:bg-gray-900 dark:text-white max-w-7xl mx-auto shadow-lg transition-colors duration-300">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      >
        <span className="text-xl sm:text-3xl md:text-4xl bg-amber-500 rounded-lg py-1 sm:py-2 px-2 sm:px-4 font-bold text-white">
          Cine
        </span>
        <span className="text-xl sm:text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-300">
          Verse
        </span>
      </Link>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-4 sm:gap-8">
        <MenuItems
          title="Home"
          address="/"
          Icon={IoHome}
          className="flex items-center space-x-1 text-lg sm:text-xl text-gray-800 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-transform duration-200 hover:scale-105"
        />
        <MenuItems
          title="About"
          address="/about"
          Icon={BsFillInfoCircleFill}
          className="flex items-center space-x-1 text-lg sm:text-xl text-gray-800 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-transform duration-200 hover:scale-105"
        />
        <DarkMode className="text-lg sm:text-xl" />
      </nav>
    </header>
  );
};

export default Header;
