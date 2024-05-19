import { Route, Routes } from "react-router-dom"
import { Analytics, Customers, Dashboard, Marketing, Orders, Products } from "./Components/Pages"
import { Dashboard, Orders } from "./Components/Pages"
import './App.css'
import Customers from "./Components/Pages/Customers/Customers"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/product" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  )
}

export default App
