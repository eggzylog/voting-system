import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import UserProvider from '@/contexts/UserGlobalContext'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <SignedIn>
        <UserProvider>
          <div className="bg-blob bg-right bg-no-repeat dark:bg-[#11113A]">
            <div className="sec-dev mx-auto min-h-screen pt-0 md:pt-3 lg:pt-5">
              <Navbar />
              <Outlet />
            </div>
            <Footer />
          </div>
        </UserProvider>
      </SignedIn>

      <SignedOut>
        <div className="bg-blob dark:bg-[#11113A]">
          <div className="container mx-auto min-h-screen pt-5">
            <Navbar />
            <Outlet />
          </div>
          <Footer />
        </div>
      </SignedOut>
    </QueryClientProvider>
  )
}
