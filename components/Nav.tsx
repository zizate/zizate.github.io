import navlinks from "../data/navlinks";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Nav = () => {
  return (
    // <nav className="flex mr-8 items-center md:mr-96">
    <nav className="flex items-center ">
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a className="text-gray-800 font-medium mr-4 text-xl px-3 py-2 rounded-md hover:text-blue-500 dark:text-white">
            {nav.title}
          </a>
        </Link>
      ))}
      {/* <div className="relative rounded-xl overflow-auto p-8">
        <div className="grid place-items-center"> */}
      {/* <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
        Save changes
      </button> */}
      {/* </div>
      </div> */}
      <DarkMode />
    </nav>
  );
};

export default Nav;
