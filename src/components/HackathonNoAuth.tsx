import { Team, TeamSchema } from '../types/team'

import { useQuery } from '@tanstack/react-query'
import ImageCardNoAuth from '@/components/ImageCardNoAuth'
import hack from '@/assets/png/hack.png'

const Hackathon = () => {
  const {
    isLoading: isTeamsLoading,
    error: isTeamsError,
    data: teams
  } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await fetch('/api/v1/hackathons/1/teams')
      const data = await res.json()

      const teams: Team[] = data.teams.map((team: Team) =>
        TeamSchema.parse(team)
      )

      return teams
    }
  })

  if (isTeamsLoading) return 'Loading...'

  if (isTeamsError) return 'An error has occurred: ' + isTeamsError.message

  console.log(teams)

  return (
    <>
      <div className="mt-9 flex flex-col items-center">
        <img src={hack} alt="Hackathon Teams" className="w-1/3" />
      </div>

      <div className="grid grid-cols-12 gap-8 py-12">
        {teams?.map((team) => (
          <ImageCardNoAuth key={team.teamId} idx={team.teamId} team={team} />
        ))}
      </div>
    </>
  )
}

export default Hackathon
