import { Team, TeamSchema } from '../types/team'

import { useQuery } from '@tanstack/react-query'
import ImageCard from '@/components/ImageCardAuth'
import hack from '@/assets/png/hack.png'

const Hackathon = () => {
  const {
    isLoading: isTeamsLoading,
    error: isTeamsError,
    data: teams
  } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await fetch('/api/v1/teams')
      const data = await res.json()

      const teams: Team[] = data.teams.map((team: Team) =>
        TeamSchema.parse(team)
      )

      return teams
    }
  })

  if (isTeamsLoading) return (
    <div className="flex">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-8 border-dashed border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-dashed border-purple-500 border-t-transparent"></div>
      </div>
    </div>
  );
  // if (isTeamsLoading) return <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-white border-t-transparent shadow-md"></div>

  if (isTeamsError) return 'An error has occurred: ' + isTeamsError.message

  return (
    <>
      <div className="mt-9 flex flex-col items-center">
        <img src={hack} alt="Hackathon Teams" className="w-1/3" />
      </div>

      <div className='container mx-auto pt-5'>
        <div className="grid grid-cols-12 gap-8 py-12">
          {teams?.map((team) => (
            <ImageCard key={team.teamId} idx={team.teamId} team={team} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Hackathon
