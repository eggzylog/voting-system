import { UserGlobalContext } from '@/contexts/UserGlobalContext'
import { useContext } from 'react'

export const useGlobalUser = () => {
  const context = useContext(UserGlobalContext)
  if (context == undefined) {
    throw new Error('useContext must be used within UserProvider')
  }
  return context
}
