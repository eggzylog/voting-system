import AuthLayout from '@/layouts/AuthLayout'
import About from '@/views/About'
import Hackathon from '@/views/Hackathon'
import Home from '@/views/Home'
import HeightScreen from '@/components/HeightScreen'

import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key')
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate()

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hackathon" element={<Hackathon />} />
        </Route>
        <Route
          path="/sign-in/*"
          element={
            <HeightScreen>
              <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
            </HeightScreen>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <HeightScreen>
              <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
            </HeightScreen>
          }
        />
      </Routes>
    </ClerkProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  )
}

export default App
