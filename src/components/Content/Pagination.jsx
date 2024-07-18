import { IoMdArrowDropright, IoMdArrowDropleft  } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

export default function Pagination() {
  return (
    <section className="w-full px-8 py-4 flex justify-center items-center text-white text-sm">
        <div className="flex justify-center items-center gap-2">
            <span >Page</span>

            <div className="flex justify-center items-center gap-2 text-primary">
               <a href="">
                   <IoMdArrowDropleft size={10}/>
               </a>
            <div className="w-7 h-7 bg-primary text-white rounded-full flex justify-center items-center">1</div>
            <a href="">
                <IoMdArrowDropright size={10}/>
                </a> 
            </div>
            <button className="flex ps-2 items-center gap-2 border-b"> 30 <MdArrowForwardIos size={10}/></button>
        </div>
    </section>
  )
}
