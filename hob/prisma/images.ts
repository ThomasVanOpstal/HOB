import { Category } from '@prisma/client'
import { db } from './seed'
export async function images() {
  const babyboomImage = await db.image.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      Url: `Beauty/urdrk5dq6b5byemfbvjy.png`,
      Alt: 'Babyboom nagels',
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
      Url: `Beauty/ccolg76pi3jf9cuu2eie.png`,
      Alt: 'French manicure',
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
      Url: `Beauty/tkzglyiynyunsrdpb1ic`,
      Alt: 'Blushes nagels',
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
      Url: `Beauty/u5hhqpmorov7m62ys6l1`,
      Alt: 'Kleurijke nagels',
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
      Url: `Body/beauty-spa_b804f9`,
      Alt: 'Ontspannende massage',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
  })
  const gelNagelsImage = await db.image.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      Url: `Beauty/ybbtgbknstz9szd8opw3`,
      Alt: 'Nagels worden gelakt',
      W: 800,
      H: 800,
      BlurDataUrl: '',
    },
  })
  const strassImage = await db.image.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      Url: `Beauty/sgtxyspjuybbkrvqtoub`,
      Alt: 'Strass nagels (steentjes)',
      W: 200,
      H: 200,
      BlurDataUrl: '',
    },
  })
}
