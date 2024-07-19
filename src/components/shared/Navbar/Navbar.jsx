import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  "Wallet",
  "Balance",
  "Trade",
  "Withdraw",
  "Activities",
  "Documents",
  "Notes",
  "Mail",
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full h-[95px] px-2 sm:p-4 flex justify-between items-center bg-main-100 text-white">
      <button className="p-4 flex justify-center items-center gap-2">
        <FaArrowLeft />
        <span className="text-lg">Customer</span>
      </button>
      <nav className="w-full hidden justify-end pr-4 xl:pr-16 lg:flex">
        <ul className="flex justify-center items-center gap-4 xl:gap-10 ">
          {links.map((link) => (
            <li
              className="text-lg py-4 cursor-pointer border-b-2 border-transparent transition duration-150 ease-in-out hover:text-primary hover:border-b-2 hover:border-primary "
              key={link}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>

      <div className="block lg:hidden pr-4">
        <RxHamburgerMenu size={30} className="cursor-pointer" onClick={() => setOpen(!open)} />

          <div className={`w-full h-fit py-8 z-50 absolute right-0 transition-all duration-300 ease-in-out bg-primary/90 ${open ? "opacity-100 top-[70px]" : "top-[-700px] opacity-0"}`}>
            <ul className={`flex flex-col items-center gap-2 ${open ? "opacity-100" : "opacity-0"}`}>
              {links.map((link) => (
                <li
                  className="text-lg py-2 cursor-pointer border-b-2 border-transparent transition duration-150 ease-in-out hover:text-main-100 hover:border-b-2 hover:border-main-100 "
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </header>
  );
}
