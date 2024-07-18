
export default function Table() {
    return (
        <div className="w-[95%] px-8 py-2 overflow-x-auto">
          <table className="min-w-full  ">
            <thead>
              <tr className="outline outline-1 outline-gray-700/45 rounded-tl rounded-tr">
                <th className="py-2 px-4   bg-main-100 text-left text-sm font-medium text-gray-500">Created</th>
                <th className="py-2 px-4  bg-main-100 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="py-2 px-4  bg-main-100 text-left text-sm font-medium text-gray-500">Currency</th>
                <th className="py-2 px-4  bg-main-100 text-left text-sm font-medium text-gray-500">Proof</th>
                <th className="py-2 px-4  bg-main-100 text-left text-sm font-medium text-gray-500">Payment</th>
                <th className="py-2 px-4  bg-main-100 text-left text-sm font-medium text-gray-500">Status</th>

              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-700/70 text-sm text-gray-100">Thu Jul 29 2021</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">27</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">USD</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">View proof</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">
                    <button className="bg-primary text-md tracking-widest font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100">Details</button>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-possessing">Processing</td>
                </tr>

                <tr>
                  <td className="py-2 px-4 border-b border-gray-700/70 text-sm text-gray-100">Thu Jul 29 2021</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">27</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">USD</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">View proof</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">
                    <button className="bg-primary text-md tracking-widest	font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100">Details</button>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-possessing">Processing</td>
                </tr>

                <tr>
                  <td className="py-2 px-4 border-b border-gray-700/70 text-sm text-gray-100">Thu Jul 29 2021</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">27</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">USD</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">No proof</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">
                    <button className="bg-primary text-md tracking-widest font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100">Details</button>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-possessing">Processing</td>
                </tr>

                <tr>
                  <td className="py-2 px-4 border-b border-gray-700/70 text-sm text-gray-100">Thu Jul 29 2021</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">27</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">USD</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">No proof</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">
                    <button className="bg-primary text-md tracking-widest	font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100">Details</button>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-possessing">Processing</td>
                </tr>

                <tr>
                  <td className="py-2 px-4 border-b border-gray-700/70 text-sm text-gray-100">Thu Jul 29 2021</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">27</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">USD</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">View proof</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">
                    <button className="bg-primary text-md tracking-widest	font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100">Details</button>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-danger">Decline</td>
                </tr>

                <tr>
                  <td className="py-2 px-4 border-b border-gray-700/70 text-sm text-gray-100">Thu Jul 29 2021</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">27</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">USD</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">View proof</td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-gray-100">
                    <button className="bg-primary text-md tracking-widest	font-semibold px-3 pb-2 pt-1 rounded-lg text-slate-100">Details</button>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700/70  text-sm text-danger">Decline</td>
                </tr>
            </tbody>
          </table>
        </div>
      );
    
}
