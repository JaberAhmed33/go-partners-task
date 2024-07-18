import CardList from "./components/Content/CardList"
import { AiOutlinePlus } from "react-icons/ai";
import Table from "./components/Content/Table";
import Pagination from "./components/Content/Pagination";

function App() {

  return (
    <main className="bg-main-200 h-[calc(100vh-95px)] w-[75%] p-4 flex flex-col">
    <CardList />

    <section className="w-full px-8 flex flex-col items-start mb-4">
      <h5 className="text-3xl font-semibold text-slate-100 mb-4">Withdrawals</h5>
      <button className="bg-primary text-md tracking-widest px-3 py-2 rounded-lg text-slate-100 flex items-center gap-2"><AiOutlinePlus />  Add Withdrawals</button>
    </section>

    <Table />

    <Pagination />
    </main>
    
  )
}

export default App
