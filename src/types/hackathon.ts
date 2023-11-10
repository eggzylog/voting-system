import { z } from 'zod'
import { ZDate } from './date'
import { UserSchema } from './user'

export const HackathonSchema = z.object({
  hackathonId: z.number(),
  name: z.string(),
  season: z.number(),
  registrationDeadline: ZDate,
  eventStart: ZDate,
  eventEnd: ZDate,
  description: z.string(),
  createdAt: ZDate,
  createdBy: z.string().nullable(),
  participants: z.array(UserSchema).nullable()
})

export type Hackathon = z.infer<typeof HackathonSchema>
