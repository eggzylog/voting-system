import { useContext } from 'react'

import { VoteContext } from '@/contexts/VoteContext'

export const useVote = () => {
  const context = useContext(VoteContext)
  if (context == undefined) {
    throw new Error('useVote must be used within VoteProvider')
  }
  return context
}
