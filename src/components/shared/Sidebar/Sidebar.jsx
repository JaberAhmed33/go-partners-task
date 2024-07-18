import Accordion from "./Accordion";
import { FaInfoCircle } from "react-icons/fa";
import { MdContactless } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
  return (
    <aside className="bg-main-100 h-[calc(100vh-95px)] w-[30%] flex flex-col items-center overflow-y-auto p-4">
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
  );
}
