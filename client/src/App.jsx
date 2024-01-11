import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Registration/Register"
import Error from "./Pages/Error/Error"
import Reservation from "./Pages/Reservation/Reservation"
import Menu from "./Pages/Menu/Menu"
import Logout from "./Pages/Logout/Logout"
// -----------------------for admin import
import Users from "./Admin-Pages/Users"
import Admin_Contact from "./Admin-Pages/Contact"
import Admin_Reservation from "./Admin-Pages/Reservation"
import AddMenu from "./Admin-Pages/AddMenu"
import Admin from "./Admin-Pages/Admin"
const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Error />} />
          {/* ------------------------- */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* -------------------------------------------------- */}

          {/* for Admin pannel route */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/contacts" element={<Admin_Contact />} />
          <Route path="/admin/reservations" element={<Admin_Reservation />} />
          <Route path="/admin/addmenus" element={<AddMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

