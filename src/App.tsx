import AuthLayout from '@/layouts/AuthLayout'
import About from '@/views/About'
import Hackathon from '@/views/Hackathon'
import Home from '@/views/Home'

import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Season1 from '@/views/hackathon/Season-1'
import Season2 from '@/views/hackathon/Season-2'
import S1Layout from './layouts/hackathon/S1Layout'
import S2Layout from './layouts/hackathon/S2Layout'

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
          <Route path="/hackathon" element={<Hackathon />}>
            <Route path="season-1" element={<S1Layout />}>
              <Route index element={<Season1 />} />
            </Route>
            <Route path="season-2" element={<S2Layout />}>
              <Route index element={<Season2 />} />
            </Route>
          </Route>
        </Route>
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
