import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="dark:bg-[#11113A] bg-blob">
      <div className="container pt-5 mx-auto ">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AuthLayout
