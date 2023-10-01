import { z } from 'zod'

const SearchResult = z.object({
  public_id: z.string(),
  format: z.string(),
  height: z.number(),
  width: z.number(),
  context: z.object({
    alt: z.string(),
    caption: z.string(),
  }),
})

const image = z.object({
  name: z.string(),
  url: z.string(),
  alt: z.string(),
  bg: z.string().optional(),
  w: z.number(),
  h: z.number(),
  blurDataUrl: z.string().optional(),
  format: z.string().optional(),
})
const PricingSchema = z.object({
  desktopImage: image,
  mobileImage: image,
  title: z.string(),
  price: z.number(),
  description: z.array(z.string()),
})

// extract the inferred type like this
export type image = z.infer<typeof image>
export type PricingProps = z.infer<typeof PricingSchema>
export type SearchResult = z.infer<typeof SearchResult>
