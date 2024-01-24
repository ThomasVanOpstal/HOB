import { Category } from '@prisma/client'
import { db } from '../seed'
export async function DermaplanningImages() {
  const dermaplanningDesktop = await db.image.upsert({
    where: {
      id: 23, //17
    },
    update: {
      Url: `Skin/Dermaplanning_treatment_juwxr8.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 450,
      H: 450,
      BlurDataUrl: '',
    },
    create: {
      Url: `Skin/Dermaplanning_treatment_juwxr8.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 450,
      H: 450,
      BlurDataUrl: '',
    },
  })
  const dermaplanningMobile = await db.image.upsert({
    where: {
      id: 24, //18
    },
    update: {
      Url: `Skin/dermatology_eeu7zy.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 400,
      H: 400,
      BlurDataUrl: '',
    },
    create: {
      Url: `Skin/dermatology_eeu7zy.jpg`,
      Alt: 'Gelaatsverzorging',
      W: 400,
      H: 400,
      BlurDataUrl: '',
    },
  })
}
