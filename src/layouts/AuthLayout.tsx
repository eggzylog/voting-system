import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SignedIn>
        <UserProvider>
          <VoteProvider>
            <div className="bg-blob dark:bg-[#11113A] bg-no-repeat bg-right">
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

export default AuthLayout
