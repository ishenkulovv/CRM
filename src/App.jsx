import { Route, Routes } from "react-router-dom"
import { Dashboard, Orders } from "./Components/Pages"
import './App.css'
import Customers from "./Components/Pages/Customers/Customers"
import MyProfile from "./Components/Pages/MyProfile/MyProfile"
import PersonalInformation from "./Components/Pages/PersonalInformation/PersonalInformation"
import LoginService from "./Components/Pages/LoginService/LoginService"
import Login from "./Components/Pages/Login/Login"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/my-profile" element={<MyProfile />}>
        <Route path="personal-information" element={<PersonalInformation />} />
        <Route path="login-service" element={<LoginService />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
