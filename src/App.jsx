import { Route, Routes } from "react-router-dom"
import { Dashboard, Orders } from "./Components/Pages"
import './App.css'
import Customers from "./Components/Pages/Customers/Customers"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  )
}

export default App
