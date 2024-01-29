import { Category } from '@prisma/client'
import { db } from '../seed'
export async function Wimpers_wenkbrauwen() {
  const wwDesktop = await db.image.upsert({
    where: {
      id: 13,
    },
    update: {
      Url: `Beauty/Eyelashes_treatment_nswst3.jpg`,
      Alt: 'pedicure',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
    create: {
      Url: `Beauty/Eyelashes_treatment_nswst3.jpg`,
      Alt: 'pedicure',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
  })
  const wwMobile = await db.image.upsert({
    where: {
      id: 14,
    },
    update: {
      Url: `Beauty/eyelashes_rxjgqz.jpg`,
      Alt: 'pedicure',
      W: 250,
      H: 250,
      BlurDataUrl: '',
    },
    create: {
      Url: `Beauty/eyelashes_rxjgqz.jpg`,
      Alt: 'pedicure',
      W: 250,
      H: 250,
      BlurDataUrl: '',
    },
  })
}
