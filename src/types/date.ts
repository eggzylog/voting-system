import { z } from 'zod'

export const ZDate = z.string().transform((str) => new Date(str))
