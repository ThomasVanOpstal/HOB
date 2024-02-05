import cloudinary from 'cloudinary'
import { publicProcedure, router } from './trpc'
import { SearchResult, image } from '@/types/type'
import getBase64ImageUrl from '@/lib/generateBlurPlaceholder'
import { z } from 'zod'
import {
  getServices,
  getAllServices,
  getServiceByCategory,
} from './getServices'
import next from 'next'
let cachedResults: image[] = []

export const appRouter = router({
  getServices,
  getAllServices,
  getServiceByCategory,
  getImages: publicProcedure
    .input(
      z.object({
        folder: z.string().optional(),
      })
    )
    .query(async (opts) => {
      // const search = (await cloudinary.v2.search
      //   .expression(`resource_type:image AND folder: ${opts.input.folder}`)
      //   .sort_by('created_at', 'desc')
      //   .with_field('context')
      //   .max_results(10)
      //   .execute()) as { resources: SearchResult[]; next_cursor: string }

      const search = (await cloudinary.v2.api.resources({
        resource_type: 'image',
        type: 'upload',
        prefix: opts.input.folder,
        max_results: 10,
        next_cursor: null,
      })) as {
        resources: SearchResult[]
        next_cursor: string
      }
      const reducedResults: image[] = []

      let i = 0
      for (let result of search.resources) {
        reducedResults.push({
          h: result.height,
          w: result.width,
          url: result.public_id,
          format: result.format,
          alt: result.context?.alt || '',
          name: result.context?.caption || '',
        })
        i++
      }
      const blurImagePromises = search.resources.map((image: SearchResult) => {
        return getBase64ImageUrl(image)
      })
      const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

      for (let i = 0; i < reducedResults.length; i++) {
        reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
      }

      return reducedResults
    }),
})

export type AppRouter = typeof appRouter
