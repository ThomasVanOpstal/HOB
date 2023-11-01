import { Category, PrismaClient } from '@prisma/client'
import { options } from './gelOptions'
import { images } from './images'
export const db = new PrismaClient()

async function main() {
  const optionimages = await images()
  const optionsGelnagels = await options()

  const massage = await db.service.create({
    data: {
      Category: Category.Body,
      Subcategory: 'Massage',
      name: 'Ontspannende massage',
      Description:
        'Een massage is als een verwenmoment voor je lichaam en geest. Het is een therapie waarbij een ervaren therapeut je spieren, weefsels en gewrichten behandelt om stress te verminderen, pijn te verlichten en algeheel welzijn te bevorderen. Massage verbetert de bloedcirculatie, verhoogt de flexibiliteit en versnelt het herstel na blessures. Wij bieden een ontspanningsmassage aan om uw lichaam helemaal tot rust te laten komen. Klaar om te ontspannen? Wacht niet langer en boek nu je massage-ervaring!',
      Price: 50,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            imageId: 5,
          },
        ],
      },
      Type: 'Ontspannend',
    },
  })
  const gelnagels = await db.service.create({
    data: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      name: 'Gelnagels',
      Description:
        'Gelnagels zijn de ultieme manier om je nagels (handen en voeten) te transformeren tot ware kunstwerken! Met hun duurzaamheid, veelzijdigheid en schitterende uitstraling, zijn gelnagels de keuze voor iedereen die er altijd op zijn best uit wil zien.Of je nu op zoek bent naar een verfijnde en klassieke look of juist iets gewaagders wilt proberen, gelnagels bieden eindeloze mogelijkheden voor nagelkunst en blijven er perfect uitzien, waar je ook gaat. Transformeer je nagels en verwen jezelf met de prachtige wereld van gelnagels!',
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            imageId: 6,
          },
        ],
      },
      Type: 'Ontspannend',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 1,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 2,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 3,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 4,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 5,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 6,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 7,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            assignedAt: new Date(),
            optionId: 8,
          },
        ],
      },
    },
  })
}
main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
