import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <div className="dark:bg-slate-800">
      <div className="container mx-auto ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default AuthLayout
