import { getPlaiceholder } from 'plaiceholder'
import { SearchResult } from '../types/type'

const cache = new Map<SearchResult, string>()

export default async function getBase64ImageUrl(
  image: SearchResult
): Promise<string> {
  let url = cache.get(image)
  if (url) {
    return url
  }
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
  )
  const buffer = await response.arrayBuffer()

  const { base64 } = await getPlaiceholder(Buffer.from(buffer))

  url = `data:image/jpeg;base64,${base64}`
  cache.set(image, url)
  return url
}
