import { Category } from '@prisma/client'
import { db } from '../seed'
export async function Pedicure_lakken() {
  const pedicureDesktop = await db.image.upsert({
    where: {
      id: 17, //12
    },
    update: {
      Url: `Beauty/LaurenFeet_qwkik0.jpg`,
      Alt: 'pedicure',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
    create: {
      Url: `Beauty/LaurenFeet_qwkik0.jpg`,
      Alt: 'pedicure',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
  })
  const pedicureMobile = await db.image.upsert({
    where: {
      id: 18, //13
    },
    update: {
      Url: `Beauty/Pedicure_behandeling_ozuom9.jpg`,
      Alt: 'pedicure',
      W: 250,
      H: 250,
      BlurDataUrl: '',
    },
    create: {
      Url: `Beauty/Pedicure_behandeling_ozuom9.jpg`,
      Alt: 'pedicure',
      W: 250,
      H: 250,
      BlurDataUrl: '',
    },
  })
}
