import { db } from '../seed'
export async function GelaatsverzorgingImages() {
  const gelaatsverzorgingDesktop = await db.image.upsert({
    where: {
      id: 15,
    },
    update: {
      Url: `Skin/woman-spa_fk7spy.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 450,
      H: 450,
      BlurDataUrl: '',
    },
    create: {
      Url: `Skin/woman-spa_fk7spy.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 450,
      H: 450,
      BlurDataUrl: '',
    },
  })
  const gelaatsverzorgingMobile = await db.image.upsert({
    where: {
      id: 16,
    },
    update: {
      Url: `Skin/gelaatsverzorging_ubtxpa.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 400,
      H: 400,
      BlurDataUrl: '',
    },
    create: {
      Url: `Skin/gelaatsverzorging_ubtxpa.jpg`,
      Alt: 'pedicure',
      W: 400,
      H: 400,
      BlurDataUrl: '',
    },
  })
}
