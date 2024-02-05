import { Category } from '@prisma/client'
import { db } from '../seed'
export async function options() {
  const babyboom = await db.option.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description: 'gradient van wit naar roze',
      Price: 35,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 1,
          },
        ],
      },
      Name: 'Babyboom',
    },
  })

  const french = await db.option.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description:
        'Een stijl waarbij de nagels een natuurlijke en nette uitstraling behouden.',
      Price: 35,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 2,
          },
        ],
      },
      Name: 'French Manicure',
    },
  })

  const blush = await db.option.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description:
        '"Deze stijl omvat het aanbrengen van nagellak in tinten die lijken op de kleur van blushmake-up.',
      Price: 35,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 3,
          },
        ],
      },
      Name: 'Blush nagels',
    },
  })
  const color = await db.option.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description:
        'Deze stijl omvat het aanbrengen van nagellak in een kleur naar keuze.',
      Price: 30,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 4,
          },
        ],
      },
      Name: 'Gelpolish (kleur naar keuze)',
    },
  })
  const strass = await db.option.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description:
        '"Strass nagels" verwijst naar een nagelstijl waarbij strass-steentjes, ook wel strass-kristallen genoemd, worden gebruikt om de nagels te versieren.',
      Price: 35,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 7,
          },
        ],
      },
      Name: 'Strass nagels',
    },
  })
  const verlengingAlleNagels = await db.option.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description: 'Verlenging van alle nagels',
      Price: 20,
      Time: 60,
      Name: 'Verlenging van alle nagels',
    },
  })
  const verlenging = await db.option.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description: 'Verlenging van 1 nagels',
      Price: 2,
      Time: 5,
      Name: 'Verlenging van 1 nagel',
    },
  })
  const nazorg = await db.option.upsert({
    where: {
      id: 8,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      Description:
        'Deze service omvat het veilig verwijderen van kunstnagels, zoals acryl- of gelnagels, gevolgd door nazorg voor uw natuurlijke nagels.',
      Price: 2,
      Time: 5,
      Name: 'verwijderen gelnagel + nazorg',
    },
  })
}
