import { User } from '@/types/user'
import { useUser } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'

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
  createdAt: new Date(Date.now()).toString()
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
    queryKey: ['userId'],
    queryFn: async () => {
      const res = await fetch(`api/v1/users/` + authUser.user!.username)
      if (res.status == 200) {
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
