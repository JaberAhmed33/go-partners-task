/* eslint-disable react/prop-types */
import { MdShowChart } from "react-icons/md";

export default function Card({ icon, title, amount, bg, color, isProfit = false }) {
  return (
    <div className="w-[40%] sm:w-[20%] h-fit bg-main-100 p-2 md:p-4 xl:p-6 flex items-center rounded-2xl relative">
      <div className="flex flex-col justify-center gap-2">
        <div className={`w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 ${bg} ${color} rounded-full flex justify-center items-center `}>
          {icon}
        </div>
        <h2 className="text-md md:text-xl xl:text-2xl font-semibold text-white">
          $<span>{amount}</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base xl:text-md font-normal xl:font-medium">{title}</p>
      </div>

      {isProfit && (
        <div className="text-sm text-green-400 mr-4 absolute right-[-10px] md:right-[2px] lg:right-[-5px]">
          <MdShowChart size={30} />
          <span className="font-light">-14%</span>
        </div>
      )}
    </div>
  );
}
