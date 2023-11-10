import { useContext } from 'react'

import { UserGlobalContext } from '@/contexts/UserGlobalContext'

export const useGlobalUser = () => {
  const context = useContext(UserGlobalContext)
  if (context == undefined) {
    throw new Error('useContext must be used within UserProvider')
  }
  return context
}
