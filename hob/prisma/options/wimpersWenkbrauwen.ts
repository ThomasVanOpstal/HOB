import { Category } from '@prisma/client'
import { db } from '../seed'
export async function Wimpers_wenkbrauwen_options() {
  const wimpersWenkbrauwen = await db.option.upsert({
    where: {
      id: 13,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Wenkbrauwen',
      Description:
        'Met wimperverven worden je wimpers prachtig donker, waardoor ze een natuurlijke definitie krijgen.',
      Price: 30,
      Time: 30,
      Name: 'Wimpers & wenkbrauwen lakken',
      Image: {
        create: [
          //desktop & mobile
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 13,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 14,
          },
        ],
      },
    },
  })
}
