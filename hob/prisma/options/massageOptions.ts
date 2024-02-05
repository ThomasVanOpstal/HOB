import { Category } from '@prisma/client'
import { db } from '../seed'

export async function massageOptions() {
  const nekMassage = await db.option.upsert({
    where: {
      id: 9,
    },
    update: {},
    create: {
      Category: Category.Body,
      Subcategory: 'Massage',
      Description:
        'Een hoofd-, nek- en schoudermassage is een verkwikkende behandeling die specifiek gericht is op het hoofd, de nek en de schouders.',
      Price: 40,
      Time: 30,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 9,
          },
        ],
      },
      Name: 'Hoofd, nek en schoudermassage',
    },
  })
  const voetMassage = await db.option.upsert({
    where: {
      id: 10,
    },
    update: {},
    create: {
      Category: Category.Body,
      Subcategory: 'Massage',
      Description:
        'Trakteer uzelf op pure verwennerij met onze voet- en beenmassage! ',
      Price: 35,
      Time: 30,
      Name: 'Voet- en beenmassage',
    },
  })
}
