import { useQuery } from '@tanstack/react-query'

import { Cube } from '@/assets'
import { Team, TeamSchema } from '@/types/team'
import { BgColor } from '@/types/bgColor'
import { useVote } from '@/hooks/useVote'
import Loading from '@/components/Loading'

const apiVersion = import.meta.env.VITE_API_VERSION

const Billboard = () => {
  const { votedFor } = useVote()
  let bgColor: BgColor

  const {
    isLoading: isTeamsLoading,
    error: isTeamsError,
    data: teams
  } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await fetch(`/api/${apiVersion}/hackathons/1/teams`)
      const data = (await res.json()) as { teams: Team[] }

      const teams = data.teams.map((team) => TeamSchema.parse(team))

      return teams
    }
  })

  if (isTeamsLoading) return <Loading />

  if (isTeamsError) return 'An error has occurred: ' + isTeamsError.message

  return (
    <div className="relative mx-7 rounded-2xl border-background-lighter bg-[#2020537e] p-8 text-center outline outline-2 outline-[#7979c436] md:mx-6 md:mt-16 lg:mt-20">
      <img
        src={Cube}
        alt="cube"
        className="top-[-3rem] z-10 max-w-0 md:absolute md:right-0 md:max-w-[7rem] lg:absolute lg:right-[-2rem] lg:max-w-[10rem]"
      />
      <h3 className="md:text-1xl mb-5 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent lg:text-4xl">
        CURRENT UPDATE!
      </h3>
      {votedFor != null && (
        <ul className="container-full">
          {teams
            ?.sort((a, b) => (b.votePercentage || 0) - (a.votePercentage || 0))
            .map((team) => {
              if ((team.votePercentage || 0) >= 75) {
                bgColor = 'success'
              } else if ((team.votePercentage || 0) >= 50) {
                bgColor = 'info'
              } else if ((team.votePercentage || 0) >= 25) {
                bgColor = 'warning'
              } else {
                bgColor = 'error'
              }

              return (
                <li
                  key={team.teamId}
                  className="mb-5 font-bold text-white lg:text-2xl"
                >
                  {team.name}
                  <progress
                    className={`progress mt-2 h-[2rem] w-full progress-${bgColor}`}
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
