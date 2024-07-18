import profileImg from "../../../assets/profile-img.jpg";
export default function ProfileCard() {
  return (
    <section className="w-[98%] p-8 mb-4 flex flex-col justify-center items-center border-b border-slate-300/55">
        <div className="w-full flex items-start relative mb-2">
          <div className="w-[100px] h-[100px] bg-slate-100 rounded-full m-auto flex justify-center items-center">
            <img src={profileImg} alt="profile image" className="rounded-full w-[96px] h-[96px] object-cover"/>
          </div>
          <button className="bg-primary text-md tracking-widest	font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100 absolute right-0">...</button>
        </div>
        <h3 className="text-xl font-semibold text-slate-100 mb-2">Blake Lockman</h3>
        <span className="text-slate-300 text-md">blakelockman33@gmail.com</span>
    </section>
  )
}
