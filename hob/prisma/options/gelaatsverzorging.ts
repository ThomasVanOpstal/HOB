import { Category } from '@prisma/client'
import { db } from '../seed'
export async function GelaatsverzorgingOptions() {
  const gelaatsverzorging = await db.option.upsert({
    where: {
      id: 14,
    },
    update: {},
    create: {
      Category: Category.Skin,
      Subcategory: 'Gelaat',
      Description:
        'Een gelaatsverzorging is een uitgebreide behandeling die gericht is op het reinigen, hydrateren en verbeteren van de conditie van de huid van het gezicht.',
      Price: 50,
      Time: 60,
      Name: 'Reinigen & hydrateren',
      Image: {
        create: [
          //desktop & mobile
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 15,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 16,
          },
        ],
      },
    },
  })
}
