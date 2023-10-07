import { PrismaClient, Category } from '@prisma/client'
const db = new PrismaClient()

async function main() {
  const massage = await db.service.upsert({
    where: {
      id: 'massage',
    },
    update: {},
    create: {
      Category: Category.Body,
      Subcategory: 'Massage',
      name: 'Ontspannende massage',
      Description:
        'Een massage is als een verwenmoment voor je lichaam en geest. Het is een therapie waarbij een ervaren therapeut je spieren, weefsels en gewrichten behandelt om stress te verminderen, pijn te verlichten en algeheel welzijn te bevorderen. Massage verbetert de bloedcirculatie, verhoogt de flexibiliteit en versnelt het herstel na blessures. Wij bieden een ontspanningsmassage aan om uw lichaam helemaal tot rust te laten komen. Klaar om te ontspannen? Wacht niet langer en boek nu je massage-ervaring!',
      Price: 50,
      Time: 60,
      Image: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1695918416/Body/beauty-spa_b804f9.jpg`,
      Type: 'Ontspannend',
    },
  })
  const short = await db.treatment.upsert({
    where: {
      id: 'short',
    },
    update: {},
    create: {
      price: 40,
      name: 'Short massage',
      description: '30 minuten van intens genieten',
      Time: 30,
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
