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
            imageId: 11, //12
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 12, //12
          },
        ],
      },
    },
  })
  const Lakken = await db.option.upsert({
    where: {
      id: 12,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: ['Nagels', 'Pedicure', 'Lakken'],
      Description:
        'Het lakken van teennagels is een cosmetische praktijk waarbij nagellak wordt aangebracht op de nagels van de tenen. Nagellak is verkrijgbaar in verschillende kleuren, texturen en afwerkingen.',
      Price: [3, 3, 3],
      Time: [5, 5, 5],
      Name: 'Lakken teenagels',
    },
  })
}
