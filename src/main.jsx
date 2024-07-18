import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/shared/Navbar/Navbar.jsx'
import Sidebar from './components/shared/Sidebar/Sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <section className="flex w-full h-[calc(100vh-95px)]">
      <Sidebar />
      <App />
    </section>
  </React.StrictMode>,
)
