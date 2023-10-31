import { Category } from '@prisma/client'
import { db } from './seed'
export async function images() {
  const babyboomImage = await db.image.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698700622/Beauty/urdrk5dq6b5byemfbvjy.png`,
      Alt: 'Babyboom nails',
      W: 500,
      H: 500,
      BlurDataUrl: '',
    },
  })
  const frenchImage = await db.image.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698700622/Beauty/urdrk5dq6b5byemfbvjy.png`,
      Alt: 'french manicure',
      W: 200,
      H: 200,
      BlurDataUrl: '',
    },
  })
  const blushImage = await db.image.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698746082/Beauty/tkzglyiynyunsrdpb1ic.png`,
      Alt: 'Blushes nails',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
  })
  const colorImage = await db.image.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698746279/Beauty/u5hhqpmorov7m62ys6l1.png`,
      Alt: 'Blushes nails',
      W: 150,
      H: 150,
      BlurDataUrl: '',
    },
  })
  const massageImage = await db.image.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695918416/Body/beauty-spa_b804f9.jpg`,
      Alt: 'Ontspannende massage',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
  })
}
