import { Route, Routes } from "react-router-dom"
import { Analytics, Customers, Dashboard, Marketing, Orders, Products } from "./Components/Pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/product" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  )
}

export default App
