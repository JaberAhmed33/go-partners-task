import CardList from "./components/Content/CardList"
import { AiOutlinePlus } from "react-icons/ai";
import Table from "./components/Content/Table";
import Pagination from "./components/Content/Pagination";

function App() {

  return (
    <main className="bg-main-200 h-[calc(100vh-95px)] w-full lg:w-[75%] px-2 sm:p-4 flex flex-col">
    <CardList />

    <section className="w-full sm:px-8 flex justify-between items-center sm:flex-col sm:items-start my-2 sm:my-4">
      <h5 className="text-md sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-slate-100 mb-2 md:mb-4">Withdrawals</h5>
      <button className="bg-primary text-sm md:text-md tracking-wides px-2 py-1 t md:px-3 md:py-2 rounded-lg text-slate-100 flex items-center gap-2"><AiOutlinePlus />  Add Withdrawals</button>
    </section>

    <Table />

    <Pagination />
    </main>
    
  )
}

export default App
