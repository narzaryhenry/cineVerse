import MenuItems from "./MenuItems";
import { IoHome } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white text-black  max-w-7xl mx-auto">
      {/* Logo */}
      <Link
        href={"/"}
        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      >
        <span className="text-2xl sm:text-4xl bg-amber-500 rounded-lg py-1 px-3 font-bold text-white">
          Cine
        </span>
        <span className="text-2xl sm:text-4xl font-light text-gray-800">
          Verse
        </span>
      </Link>

      {/* Navigation Menu */}
      <div className="flex gap-6 items-center">
        <MenuItems
          title="Home"
          address="/"
          Icon={IoHome}
          className="text-gray-800 hover:text-amber-500 transition-colors duration-200"
        />
        <MenuItems
          title="About"
          address="/about"
          Icon={BsFillInfoCircleFill}
          className="text-gray-800 hover:text-amber-500 transition-colors duration-200"
        />
      </div>
    </div>
  );
};

export default Header;
