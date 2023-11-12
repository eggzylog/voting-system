import { z } from 'zod'

export const ZDate = z.union([
  z.string().transform((str) => new Date(str)),
  z.date()
])
