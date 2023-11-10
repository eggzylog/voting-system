import { ParticipantContext } from '@/contexts/ParticipantContext'
import { useContext } from 'react'

export const useParticipant = () => {
  const context = useContext(ParticipantContext)
  if (context == undefined) {
    throw new Error('useParticipant must be used within ParticipantProvider')
  }
  return context
}
