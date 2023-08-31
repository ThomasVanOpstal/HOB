import { db } from '@/lib/db'
import { z } from 'zod'
import { publicProcedure, router } from './trpc'

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await db.user.findMany()
    // Retrieve users from a datasource, this is an imaginary database
  }),
  addTodos: publicProcedure.input(z.string()).mutation(async (input) => {
    await db.user.create({})
    return true
  }),
})
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter
