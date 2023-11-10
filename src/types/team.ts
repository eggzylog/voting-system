import { z } from 'zod'
import { UserSchema } from './user'

const MemberSchema = z.object({
  id: z.number(),
  user: UserSchema
})

export const TeamSchema = z.object({
  teamId: z.number(),
  name: z.string(),
  members: z.array(MemberSchema),
  votes: z.number(),
  createdAt: z.string().transform((str) => new Date(str))
})

export type Participant = z.infer<typeof MemberSchema>
export type Team = z.infer<typeof TeamSchema>
