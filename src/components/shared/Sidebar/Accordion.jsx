/* eslint-disable react/prop-types */
import { IoMdArrowDropright, IoMdArrowDropdown  } from "react-icons/io";
import { useState } from "react";

export default function Accordion({title, icon, children}) {
    const [open, setOpen] = useState(false);

  return (
    <div className="text-md text-slate-300 p-4 border-b border-slate-300/55 w-[98%]">
      <button className="flex justify-between items-center w-full p-2 transition-all duration-300 ease-in-out" onClick={() => setOpen(!open)}>
        <div className={`flex justify-center items-center gap-2 ${open && "text-white"}`}> {icon}
        <span className={`${open && "font-semibold text-white"}`}>{title}</span></div>
        {
          open ? <IoMdArrowDropright  className="text-white"/> : <IoMdArrowDropdown />
        }
      </button>

      <div className={` flex flex-col overflow-clip transition-all duration-300 ease-in-out ${open ? "h-auto opacity-100 py-6 px-12" : " h-0 opacity-0 p-0"}`}>
        {children}
      </div>
    </div>
  )
}
