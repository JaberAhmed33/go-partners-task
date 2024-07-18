import { FaArrowLeft } from "react-icons/fa6";

const links = ["Wallet", "Balance", "Trade", "Withdraw", "Activities", "Documents", "Notes", "Mail"];
export default function Navbar() {
  return (
    <header className="w-full h-[95px] p-4 flex justify-between items-center bg-main-100 text-white">
      <button className="p-4 flex justify-center items-center gap-2">
        <FaArrowLeft />
        <span className="text-lg">Customer</span>
      </button>
      <nav className="w-full flex justify-end pr-16">
        <ul className="flex justify-center items-center gap-10 ">
          {links.map((link) => (
            <li className="text-lg py-4 cursor-pointer border-b-2 border-transparent transition duration-150 ease-in-out hover:text-primary hover:border-b-2 hover:border-primary " key={link}>{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
