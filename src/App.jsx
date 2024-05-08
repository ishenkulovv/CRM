import { Route, Routes } from "react-router-dom"
import { Dashboard, Orders } from "./Components/Pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  )
}

export default App
