import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import UserProvider from '@/contexts/UserGlobalContext'
import VoteProvider from '@/contexts/VoteContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const RootLayout = () => {
  return (
    <div className="bg-blob bg-right bg-no-repeat dark:bg-[#11113A]">
      <div className="bg-radial2">
        <div className="bg-radial1">
          <div className="sec-dev mx-auto min-h-screen pt-0 md:pt-3 lg:pt-5">
            <Navbar />
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

const AuthLayout = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <VoteProvider>
          <RootLayout />
        </VoteProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}

export default AuthLayout
