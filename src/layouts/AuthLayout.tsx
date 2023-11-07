import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <div className="dark:bg-[#11113A] bg-blob">
      <div className="container mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default AuthLayout
