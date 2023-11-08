import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import UserProvider from '@/contexts/UserGlobalContext'
import VoteProvider from '@/contexts/VoteContext'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SignedIn>
        <UserProvider>
          <VoteProvider>
            <div className="bg-blob dark:bg-[#11113A]">
              <div className="container mx-auto min-h-screen pt-5">
                <Navbar />
                <Outlet />
              </div>
              <Footer />
            </div>
          </VoteProvider>
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
