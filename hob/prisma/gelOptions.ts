import { Category } from '@prisma/client'
import { db } from './seed'
export async function options() {
  const babyboomImage = await db.image.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698700622/Beauty/urdrk5dq6b5byemfbvjy.png`,
      Alt: 'Babyboom nails',
      W: 500,
      H: 500,
      BlurDataUrl: '',
    },
  })
  const frenchImage = await db.image.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698700622/Beauty/urdrk5dq6b5byemfbvjy.png`,
      Alt: 'french manicure',
      W: 200,
      H: 200,
      BlurDataUrl: '',
    },
  })
  const blushImage = await db.image.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698746082/Beauty/tkzglyiynyunsrdpb1ic.png`,
      Alt: 'Blushes nails',
      W: 300,
      H: 300,
      BlurDataUrl: '',
    },
  })
  const colorImage = await db.image.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      Url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1698746279/Beauty/u5hhqpmorov7m62ys6l1.png`,
      Alt: 'Blushes nails',
      W: 150,
      H: 150,
      BlurDataUrl: '',
    },
  })

  const babyboom = await db.option.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: ['Nagels'],
      Description:
        ' Deze stijl is een zachte en elegante vorm van nagelstyling waarbij de nagels meestal in een verloop (gradient) van een lichte kleur naar een natuurlijke witte kleur worden gemaakt. Het resultaat is een subtiel, klassiek en tijdloos uiterlijk dat lijkt op de natuurlijke groei van de nagels, vandaar de naam "babyboom."',
      Price: [35, 45, 55],
      Time: [60, 90, 120],
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
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
      Subcategory: ['Nagels', 'Stijlen'],
      Description:
        'De "French manicure" is een populaire nagelstijl en nagelverzorgingstechniek die bekendstaat om zijn eenvoudige, klassieke en verfijnde uitstraling. Het is een stijl waarbij de nagels een natuurlijke en nette uitstraling behouden.',
      Price: [35, 45, 55],
      Time: [60, 90, 120],
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
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
      Subcategory: ['Nagels', 'Stijlen'],
      Description:
        '""Blush nagels" verwijst naar een populaire nagelstijl en nagellakkleur die geïnspireerd is op de kleur van blush, wat vaak een zachte, roze of perzikachtige tint is. Deze stijl omvat het aanbrengen van nagellak in tinten die lijken op de kleur van blushmake-up, waardoor de nagels een subtiele en elegante uitstraling krijgen.',
      Price: [35, 45, 55],
      Time: [60, 90, 120],
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
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
      Subcategory: ['Nagels', 'Stijlen'],
      Description:
        'Deze stijl omvat het aanbrengen van nagellak in een kleur naar keuze. De nagellak kan een effen kleur zijn of een combinatie van verschillende kleuren, afhankelijk van de voorkeur van de klant. Deze stijl is een eenvoudige en klassieke manier om de nagels te stylen.',
      Price: [30, 40, 50],
      Time: [60, 90, 120],
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            imageId: 4,
          },
        ],
      },
      Name: 'Kleur nagels',
    },
  })
  const strass = await db.option.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      Category: Category.Beauty,
      Subcategory: ['Nagels', 'Stijlen'],
      Description:
        '"Strass nagels" verwijst naar een nagelstijl waarbij strass-steentjes, ook wel strass-kristallen genoemd, worden gebruikt om de nagels te versieren en te verfraaien. Strass-steentjes zijn kleine, glinsterende decoratieve elementen die meestal gemaakt zijn van glas of kristal en verschillende vormen en maten kunnen hebben. Deze strass-steentjes worden op de nagels aangebracht met behulp van nagellijm of een speciale nageltechniek.',
      Price: [35, 45, 55],
      Time: [60, 90, 120],
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            imageId: 5,
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
      Subcategory: ['Nagels', 'Verlenging'],
      Description: 'Verlenging van alle nagels',
      Price: [20, 30, 40],
      Time: [60, 90, 120],
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
      Subcategory: ['Nagels', 'Verlenging'],
      Description: 'Verlenging van 1 nagels',
      Price: [2, 4, 6],
      Time: [5, 8, 10],
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
      Subcategory: ['Nagels', 'Nazorg', 'Verwijderen'],
      Description:
        'Deze service omvat het veilig verwijderen van kunstnagels, zoals acryl- of gelnagels, gevolgd door nazorg voor uw natuurlijke nagels. We zorgen ervoor dat uw kunstnagels zonder schade worden verwijderd, en vervolgens geven we uw natuurlijke nagels de aandacht die ze verdienen, waaronder vijlen, polijsten, en hydratatie om ze gezond en mooi te houden.',
      Price: [2, 4, 6],
      Time: [5, 8, 10],
      Name: 'verwijderen gelnagel + nazorg',
    },
  })
}
