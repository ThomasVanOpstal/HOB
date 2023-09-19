import { z } from 'zod'

const image = z.object({
  name: z.string(),
  url: z.string(),
  alt: z.string(),
  bg: z.string(),
  w: z.number(),
  h: z.number(),
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
