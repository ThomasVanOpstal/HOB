import { Category, PrismaClient } from '@prisma/client'
import { options } from './options/gelOptions'
import { images } from './images/images'
import { Pedicure_lakken } from './images/pedicure_lakken'
import { massageOptions } from './options/massageOptions'
import { Pedicure_lakken_options } from './options/pedicure_lakken'
import { Wimpers_wenkbrauwen } from './images/wimpers_wenkbrauwen'
import { Wimpers_wenkbrauwen_options } from './options/wimpersWenkbrauwen'
import { GelaatsverzorgingImages } from './images/gelaatsverzorging'
import { GelaatsverzorgingOptions } from './options/gelaatsverzorging'
import { DermaplanningImages } from './images/dermaplanning'
import { dermaplanningOptions } from './options/dermaplanning'
export const db = new PrismaClient()

async function main() {
  const imagesGelnagels = await images()
  const imagesPedicure = await Pedicure_lakken()
  const wwImages = await Wimpers_wenkbrauwen()
  const imagesGelaatsverzorging = await GelaatsverzorgingImages()
  const dermaplanningImages = await DermaplanningImages()
  const optionsGelnagels = await options()
  const optionimages = await massageOptions()
  const Pedicureoptions = await Pedicure_lakken_options()
  const wwOptions = await Wimpers_wenkbrauwen_options()
  const GelOptions = await GelaatsverzorgingOptions()
  const dermaOptions = await dermaplanningOptions()
  const gelnagels = await db.service.create({
    data: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      name: 'Gelnagels',
      Description:
        'Gelnagels zijn de ultieme manier om je nagels (handen en voeten) te transformeren tot ware kunstwerken!',
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 6,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 10,
          },
        ],
      },
      Type: 'Ontspannend',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 1,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 2,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 3,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 4,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 5,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 6,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 7,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 8,
          },
        ],
      },
    },
  })
  const massage = await db.service.create({
    data: {
      Category: Category.Body,
      Subcategory: 'Massage',
      name: 'Ontspannende massage',
      Description:
        'Een massage is als een verwenmoment voor je lichaam en geest.',
      Price: 50,
      Time: 60,
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 5,
          },
        ],
      },
      Type: 'Ontspannend',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 9,
          },
        ],
      },
    },
  })
  const pedicure = await db.service.create({
    data: {
      Category: Category.Beauty,
      Subcategory: 'Nagels',
      name: 'Pedicure',
      Description:
        'Stel je voor: een luxueuze behandeling die niet alleen je voeten transformeert, maar ook een weldaad is voor je hele lichaam.',
      Image: {
        create: [
          //desktop & mobile priceslider
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 11,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 12,
          },
        ],
      },
      Type: 'Verzorging nagels',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 11,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 12,
          },
        ],
      },
    },
  })
  const dermaplanning = await db.service.create({
    data: {
      Category: Category.Skin,
      Subcategory: 'Gezicht',
      name: 'Dermaplanning',
      Description:
        'Ontdek de geheime sleutel tot een zijdezachte, stralende huid met onze Dermaplaning-behandeling! ',
      Image: {
        create: [
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
      Type: 'Gelaatsverzorging',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 15,
          },
        ],
      },
    },
  })
  const gelaatsVerzorging = await db.service.create({
    data: {
      Category: Category.Skin,
      Subcategory: 'Gelaat',
      name: 'Gelaatsverzorging',
      Description:
        'Een gelaatsverzorging is een verfrissende en revitaliserende behandeling die de gezondheid en uitstraling van je huid bevordert.',
      Image: {
        create: [
          //desktop & mobile priceslider
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
      Type: 'Gelaatsverzorging',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 14,
          },
        ],
      },
    },
  })
  const wimpersWenkbrauwen = await db.service.create({
    data: {
      Category: Category.Beauty,
      Subcategory: 'Wimpers & wenkbrauwen',
      name: 'Wimpers & wenkbrauwen',
      Description:
        'Stel je voor: elke dag ontwaak je met prachtig gedefinieerde ogen, zonder dat je je druk hoeft te maken over het aanbrengen van mascara of wenkbrauwpotlood.',
      Image: {
        create: [
          //desktop & mobile priceslider
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 13,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 14,
          },
        ],
      },
      Type: 'Wimpers & wenkbrauwen lakken',
      Options: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',
            optionId: 13,
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
