import { z } from 'zod'
import { UserSchema } from './user'
import { ZDate } from './date'

export const TeamSchema = z.object({
  teamId: z.number(),
  name: z.string(),
  hackathonId: z.number(),
  members: z.array(UserSchema),
  votes: z.number(),
  votePercentage: z.number().nullable(),
  createdAt: ZDate
})

export type Team = z.infer<typeof TeamSchema>
