import { z } from 'zod'
import { ZDate } from './date'

export const UserSchema = z.object({
  userId: z.number(),
  authId: z.string().nullable(),
  username: z.string(),
  email: z.string().nullable(),
  birthdate: ZDate.nullable(),
  lastName: z.string().nullable(),
  firstName: z.string().nullable(),
  profileImageURL: z.string().nullable(),
  createdAt: ZDate
})

export type User = z.infer<typeof UserSchema>
