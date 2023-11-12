import { useQuery } from "@tanstack/react-query"

import { Team, TeamSchema } from "@/types/team"
import { useVote } from "@/hooks/useVote"
import Loading from "@/components/Loading"

const Billboard = () => {
  const { votedFor } = useVote()

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
    <>
      {votedFor != null && (
          <ul className="p-4 mx-auto container-full">
            {teams?.map((team) => (
              <li key={team.teamId}>
                {team.name}: <progress className="progress progress-secondary w-full" value={team.votePercentage || 0} max="100"></progress>
              </li>
            ))}
          </ul>
      )}
    </>
  )
}
export default Billboard