import { createContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useUser } from '@clerk/clerk-react'

import { User } from '@/types/user'

const apiVersion = import.meta.env.VITE_API_VERSION

// placeholder
const user_placeholder: User = {
  userId: 0,
  authId: null,
  username: 'username',
  email: null,
  birthdate: null,
  lastName: null,
  firstName: null,
  profileImageURL: null,
  createdAt: new Date(Date.now())
}

export type UserGlobalContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserGlobalContext = createContext<UserGlobalContextType | null>(
  null
)

export default function UserProvider({
  children
}: {
  children: React.ReactNode
}) {
  const authUser = useUser()
  const [user, setUser] = useState(user_placeholder)

  useQuery({
    queryKey: ['userId', { authUser }],
    queryFn: async () => {
      const res = await fetch(`api/${apiVersion}/users/${authUser.user!.username}`)
      if (res.ok) {
        const data = await res.json()
        setUser(data)
        console.log(data)
        return data
      }
    }
  })

  return (
    <UserGlobalContext.Provider value={{ user, setUser }}>
      {children}
    </UserGlobalContext.Provider>
  )
}
