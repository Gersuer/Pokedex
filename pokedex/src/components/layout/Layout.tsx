import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import './Layout.css'
const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout