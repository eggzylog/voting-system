import { Team } from '@/types/team'

export type VoteData = Pick<Team, 'hackathonId' | 'teamId'> & {
  userId: Team['members'][0]['userId']
}
