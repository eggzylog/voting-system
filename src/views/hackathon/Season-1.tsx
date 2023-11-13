import { useQuery } from '@tanstack/react-query'

import { HackathonSchema } from '@/types/hackathon'
import Hackathon from '@/components/Hackathon'
import Loading from '@/components/Loading'

const apiVersion = import.meta.env.VITE_API_VERSION

const Season1 = () => {
  const { data: hackathon, isLoading } = useQuery({
    queryKey: ['hackathon'],
    queryFn: async () => {
      const res = await fetch(`/api/${apiVersion}/hackathons/1`)
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        return HackathonSchema.parse(data)
      }
    }
  })

  if (isLoading) return <Loading />

  console.log(hackathon)

  return (
    <>
      <Hackathon />
    </>
  )
}

export default Season1
