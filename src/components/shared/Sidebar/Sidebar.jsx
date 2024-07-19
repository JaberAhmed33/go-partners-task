import Accordion from "./Accordion";
import { FaInfoCircle } from "react-icons/fa";
import { MdContactless } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import ProfileCard from "./ProfileCard";
import { MdDoubleArrow } from "react-icons/md";
import { useState } from "react";


export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <aside className={`bg-main-100/95 lg:bg-main-100 h-[calc(100vh-95px)] lg:w-[30%] flex flex-col items-center overflow-y-auto p-4 lg:static fixed w-[270px] transition-all duration-300 ease-in-out lg:translate-x-0 z-50 ${open ? "translate-x-0" : "translate-x-[-270px]"}`}>
      <ProfileCard />

      <Accordion
        title={"General Information"}
        icon={<FaInfoCircle size={25} />}
      >
        <div className="overflow-clip space-y-4">
          <div className="text-sm text-white">
            <p className="text-slate-300">Name</p>
            <h4>sasuke</h4>
          </div>

          <div className="text-sm text-white">
            <p className="text-slate-300">SURNAME</p>
            <h4>DSDSADS</h4>
          </div>

          <div className="text-sm text-white">
            <p className="text-slate-300">Responsible</p>
            <h4>fsfsfsaf</h4>
          </div>

          <div className="text-sm text-white">
            <p className="text-slate-300">Type</p>
            <h4>03/08/2024</h4>
          </div>

          <div className="text-sm text-white">
            <p className="text-slate-300">Status</p>
            <h4>03/08/2024</h4>
          </div>

          <div className="text-sm text-white">
            <p className="text-slate-300">User Status</p>
            <h4>fdfsd4</h4>
          </div>

          <div className="text-sm text-white">
            <p className="text-slate-300">DATE CREATION</p>
            <h4>03/08/2024</h4>
          </div>
        </div>
      </Accordion>

      <Accordion
        title={"Contact Information"}
        icon={<MdContactless size={25} />}
      >
        <div className="overflow-clip">
          <p>Lorem ipsum.</p>
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
      </Accordion>

      <Accordion title={"Account Information"} icon={<IoMdContact size={25} />}>
        <div className="overflow-clip">
          <p>Lorem ipsum.</p>
          <h4>Lorem ipsum dolor sit amet.</h4>
        </div>
      </Accordion>

   
    </aside>
    
    <div title="profile info" className={`text-primary w-fit h-fit bg-primary/50 p-1 rounded-full cursor-pointer lg:hidden z-50 ${open ? "absolute bottom-[16px] left-[211px]" : "fixed left-[8px] bottom-1/2"}`}>
      {
        open ? <MdDoubleArrow onClick={() => setOpen(false)} className="transition-all duration-300 delay-300 ease-in-out text-primary rotate-180" size={35} /> 
        : <MdDoubleArrow onClick={() => setOpen(true)} className="text-primary transition-all duration-300 ease-in-out" size={35} />
      }
      </div>
    </>
    
  );
}
