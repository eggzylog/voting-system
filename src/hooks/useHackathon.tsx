import { HackathonContext } from '@/contexts/HackathonContext'
import { useContext } from 'react'

export const useHackathon = () => {
  const context = useContext(HackathonContext)
  if (context == undefined) {
    throw new Error('useParticipant must be used within ParticipantProvider')
  }
  return context
}
