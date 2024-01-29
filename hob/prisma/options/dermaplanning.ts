import { Category } from '@prisma/client'
import { db } from '../seed'
export async function dermaplanningOptions() {
  const dermaverzorging = await db.option.upsert({
    where: {
      id: 15,
    },
    update: {},
    create: {
      Category: Category.Skin,
      Subcategory: ['Dermaplanning', 'Verzorging', 'Ontspannend'],
      Description:
        'Dermaplaning is een niet-invasieve cosmetische procedure waarbij een speciaal ontworpen chirurgisch mesje wordt gebruikt om de bovenste laag dode huidcellen en fijne donshaartjes (vellusharen) van het gezicht te schrapen',
      Price: [30, 40, 50],
      Time: [30, 45, 60],
      Name: 'Verwijdering van dode huidcellen & donshaartjes',
      Image: {
        create: [
          //desktop & mobile
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 17,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 18,
          },
        ],
      },
    },
  })
}
