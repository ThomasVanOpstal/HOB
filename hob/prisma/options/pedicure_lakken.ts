import { Category } from '@prisma/client'
import { db } from '../seed'
export async function Pedicure_lakken_options() {
  const pedicure = await db.option.upsert({
    where: {
      id: 11,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: ['Nagels', 'Pedicure', 'Lakken'],
      Description:
        'Een pedicure is een professionele behandeling voor de verzorging van de voeten en nagels. Het omvat nagelknippen, eeltverwijdering en algemene voetverzorging.',
      Price: [30, 40, 50],
      Time: [30, 45, 60],
      Name: 'Pedicure Voeten',
      Image: {
        create: [
          //desktop & mobile
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 12, //12
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 12, //12
          },
        ],
      },
    },
  })
}
