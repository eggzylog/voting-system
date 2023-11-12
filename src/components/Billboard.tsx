import { useQuery } from '@tanstack/react-query'

import { Team, TeamSchema } from '@/types/team'
import { useVote } from '@/hooks/useVote'
import Loading from '@/components/Loading'
import { Cube } from '@/assets'

const Billboard = () => {
  const { votedFor } = useVote()
  let bgColor: string;

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

  // console.log("BILLBOARD TEAMS:", teams)

  // console.log("BILLBOARD TEAMSDATA:", teamsData)

  return (
    <div className='relative rounded-2xl border-background-lighter bg-[#2020537e] p-8 text-center outline outline-2 outline-[#7979c436] lg:mt-20 md:mt-16 md:mx-6 mx-7'>
      <img
            src={Cube}
            alt="cube"
            className="top-[-3rem] z-10 max-w-0 md:absolute md:right-0 md:max-w-[7rem] lg:absolute lg:right-[-2rem] lg:max-w-[10rem]"
          />
      <h3 className="md:text-1xl bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent lg:text-4xl mb-5">
        CURRENT UPDATE!
      </h3>
      {votedFor != null && (
        <ul className="container-full">
          {teams?.sort((a, b) => (b.votePercentage || 0) - (a.votePercentage || 0)).map((team) => {
              if ((team.votePercentage || 0) >= 75) {
                bgColor = "progress-success";
              } else if ((team.votePercentage || 0) >= 50) {
                bgColor = "progress-info";
              } else if ((team.votePercentage || 0) >= 25){
                bgColor = "progress-warning";
              } else {
                bgColor = "progress-error"
              }
            
            return (
              <li key={team.teamId} className='mb-5 lg:text-2xl font-bold text-white'>
                {team.name}
                <progress
                  className={`progress mt-2 w-full h-[2rem] ${bgColor}`}
                  value={team.votePercentage || 0}
                  max="100"
                ></progress>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
export default Billboard
