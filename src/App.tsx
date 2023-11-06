import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import GuestLayout from './layouts/GuestLayout'
import Home from './views/Home'
import About from './views/About'
import Hackathon from './views/Hackathon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'hackathon',
        element: <Hackathon />
      }
    ]
  },
  {
    path: '/signin',
    element: <GuestLayout />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
