import { z } from 'zod'

export const UserSchema = z.object({
  userId: z.number(),
  authId: z.string().nullable(),
  username: z.string(),
  email: z.string().nullable(),
  birthdate: z
    .string()
    .transform((str) => new Date(str))
    .nullable(),
  lastName: z.string().nullable(),
  firstName: z.string().nullable(),
  profileImageURL: z.string().nullable(),
  createdAt: z.string().transform((str) => new Date(str))
})

export type User = z.infer<typeof UserSchema>
