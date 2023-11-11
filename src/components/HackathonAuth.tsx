import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'

import hack from '@/assets/png/hack.png'
import { Team, TeamSchema } from '@/types/team'
import ImageCardAuth from './ImageCardAuth'
import ImageCardNoAuth from './ImageCardNoAuth'
import Loading from './Loading'

const Hackathon = () => {
  const {
    isLoading: isTeamsLoading,
    error: isTeamsError,
    data: teams
  } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await fetch('/api/v1/hackathons/1/teams')
      const data = (await res.json()) as { teams: Team[] }

      const teams = data.teams.map((team) => TeamSchema.parse(team))

      return teams
    }
  })

  if (isTeamsLoading) return <Loading />

  if (isTeamsError) return 'An error has occurred: ' + isTeamsError.message

  console.log(teams)

  return (
    <>
      <div className="mt-9 flex flex-col items-center">
        <img src={hack} alt="Hackathon Teams" className="w-1/3" />
      </div>

      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-12 gap-8 py-12">
          <SignedOut>
            {teams?.map((team) => (
              <ImageCardNoAuth
                key={team.teamId}
                idx={team.teamId}
                team={team}
              />
            ))}
          </SignedOut>
          <SignedIn>
            {teams?.map((team) => (
              <ImageCardAuth key={team.teamId} idx={team.teamId} team={team} />
            ))}
          </SignedIn>
        </div>
      </div>
    </>
  )
}

export default Hackathon
