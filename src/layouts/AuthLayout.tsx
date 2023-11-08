import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="bg-blob dark:bg-[#11113A]">
      <div className="container mx-auto min-h-screen pt-5">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AuthLayout
