import { db } from '@/lib/db'
import { z } from 'zod'
import cloudinary from 'cloudinary'
import { publicProcedure, router } from './trpc'
export type SearchResult = {
  public_id: string
  tags: string[]
}
export const appRouter = router({
  getImages: publicProcedure.query(async () => {
    // Perform the Cloudinary API call to fetch images
    const search = (await cloudinary.v2.search
      .expression('resource_type:image ')
      .sort_by('created_at', 'desc')
      .with_field('tags')
      .max_results(10)
      .execute()) as { resources: SearchResult[] }

    // Return the Cloudinary search result directly
    return search
  }),
})
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter
