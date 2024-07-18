/* eslint-disable react/prop-types */
import { MdShowChart } from "react-icons/md";

export default function Card({ icon, title, amount, bg, color, isProfit = false }) {
  return (
    <div className="w-[20%] h-fit bg-main-100 p-6 flex justify-between items-center rounded-2xl">
      <div className="flex flex-col justify-center gap-2">
        <div className={`w-16 h-16 ${bg} ${color} rounded-full flex justify-center items-center `}>
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-white">
          $<span>{amount}</span>
        </h2>
        <p className="text-slate-400 font-medium">{title}</p>
      </div>

      {isProfit && (
        <div className="text-sm text-green-400 mr-4">
          <MdShowChart size={30} />
          <span className="font-light">-14%</span>
        </div>
      )}
    </div>
  );
}
