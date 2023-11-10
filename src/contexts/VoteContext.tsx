import { createContext, useState } from 'react'

export type VoteContextType = {
  hasVote: boolean
  setHasVote: React.Dispatch<React.SetStateAction<boolean>>
}

export const VoteContext = createContext<VoteContextType | null>(null)

export default function VoteProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [hasVote, setHasVote] = useState(false)

  return (
    <VoteContext.Provider value={{ hasVote, setHasVote }}>
      {children}
    </VoteContext.Provider>
  )
}