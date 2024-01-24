import { Category } from '@prisma/client'
import { db } from '../seed'
export async function Wimpers_wenkbrauwen_options() {
  const wimpersWenkbrauwen = await db.option.upsert({
    where: {
      id: 12,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: ['Wimpers', 'Wenkbrauwen', 'Lakken'],
      Description:
        'Met wimperverven worden je wimpers prachtig donker, waardoor ze een natuurlijke definitie krijgen. Dit is vooral ideaal als je van nature lichte wimpers hebt of als je gedurende de dag geen mascara wilt dragen. Het resultaat? Mooie, expressieve ogen met minimale inspanning. Wenkbrauwverven biedt een vergelijkbaar voordeel. Door de wenkbrauwharen een donkerdere tint te geven, worden je wenkbrauwen geaccentueerd en gedefinieerd.',
      Price: [30, 40, 50],
      Time: [30, 45, 60],
      Name: 'Wimpers & wenkbrauwen lakken',
      Image: {
        create: [
          //desktop & mobile
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 21, //16
          },
        ],
      },
    },
  })
}
