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
  //const optionimages = await massageOptions()
  //const optionsGelnagels = await options()
  // const imagesPedicure = await Pedicure_lakken()
  // const Pedicureoptions = await Pedicure_lakken_options()
  // const massage = await db.service.create({
  // const wwImages = await Wimpers_wenkbrauwen()
  // const wwOptions = await Wimpers_wenkbrauwen_options()
  // const imagesGelaatsverzorging = await GelaatsverzorgingImages()
  // const GelOptions = await GelaatsverzorgingOptions()
  const dermaplanningImages = await DermaplanningImages()
  const dermaOptions = await dermaplanningOptions()
  //   data: {
  //     Category: Category.Body,
  //     Subcategory: 'Massage',
  //     name: 'Ontspannende massage',
  //     Description:
  //       'Een massage is als een verwenmoment voor je lichaam en geest. Het is een therapie waarbij een ervaren therapeut je spieren, weefsels en gewrichten behandelt om stress te verminderen, pijn te verlichten en algeheel welzijn te bevorderen. Massage verbetert de bloedcirculatie, verhoogt de flexibiliteit en versnelt het herstel na blessures. Wij bieden een ontspanningsmassage aan om uw lichaam helemaal tot rust te laten komen. Klaar om te ontspannen? Wacht niet langer en boek nu je massage-ervaring!',
  //     Price: 50,
  //     Time: 60,
  //     Image: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 5,
  //         },
  //       ],
  //     },
  //     Type: 'Ontspannend',
  //     Options: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 9,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 10,
  //         },
  //       ],
  //     },
  //   },
  // })
  // const pedicure = await db.service.create({
  //   data: {
  //     Category: Category.Beauty,
  //     Subcategory: 'Nagels',
  //     name: 'Pedicure',
  //     Description:
  //       'Stel je voor: een luxueuze behandeling die niet alleen je voeten transformeert, maar ook een weldaad is voor je hele lichaam. Dat is precies wat een pedicure voor jou kan betekenen. Een pedicure is veel meer dan alleen het knippen van nagels en het verwijderen van eelt. Het is een op maat gemaakte ervaring die gericht is op het herstellen en verjongen van je voeten, waardoor je niet alleen letterlijk, maar ook figuurlijk op wolken loopt.',
  //     Image: {
  //       create: [
  //         //desktop & mobile priceslider
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 17,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 18,
  //         },
  //       ],
  //     },
  //     Type: 'Verzorging nagels',
  //     Options: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 10,
  //         },
  //       ],
  //     },
  //   },
  // })
  const dermaplanning = await db.service.create({
    data: {
      Category: Category.Skin,
      Subcategory: 'Gezicht',
      name: 'Dermaplanning',
      Description:
        'Ontdek de geheime sleutel tot een zijdezachte, stralende huid met onze Dermaplaning-behandeling! Dit niet-invasieve proces gebruikt een speciaal mesje om voorzichtig dode huidcellen en fijne donshaartjes te verwijderen, waardoor je huid direct verfrist en verjongd aanvoelt.',
      Image: {
        create: [
          //desktop & mobile priceslider
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 23,
          },
          {
            assignedBy: 'Thomas Van Opstal',
            imageId: 24,
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
  // const gelaatsVerzorging = await db.service.create({
  //   data: {
  //     Category: Category.Skin,
  //     Subcategory: 'Gelaat',
  //     name: 'Gelaatsverzorging',
  //     Description:
  //       'Een gelaatsverzorging is een verfrissende en revitaliserende behandeling die de gezondheid en uitstraling van je huid bevordert. Het omvat een zorgvuldige reiniging, exfoliatie, en hydratatie om de natuurlijke schoonheid van je gezicht te accentueren. Door gebruik te maken van aangepaste maskers en voedende producten, wordt je huid gevoed en krijgt ze een gezonde gloed',
  //     Image: {
  //       create: [
  //         //desktop & mobile priceslider
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 21,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 22,
  //         },
  //       ],
  //     },
  //     Type: 'Gelaatsverzorging',
  //     Options: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 13,
  //         },
  //       ],
  //     },
  //   },
  // })
  // const wimpersWenkbrauwen = await db.service.create({
  //   data: {
  //     Category: Category.Beauty,
  //     Subcategory: 'Wimpers & wenkbrauwen',
  //     name: 'Wimpers & wenkbrauwen',
  //     Description:
  //       'Stel je voor: elke dag ontwaak je met prachtig gedefinieerde ogen, zonder dat je je druk hoeft te maken over het aanbrengen van mascara of wenkbrauwpotlood. Dat is precies wat onze wimper- en wenkbrauwverfbehandeling voor jou kan betekenen - een moeiteloze en langdurige oplossing voor oogverleidelijkheid. Met onze wimperverf krijgen je wimpers een diepere, natuurlijke tint, waardoor ze opvallen en je ogen spreken zonder enige vorm van make-up. Het is perfect voor degenen die s ochtends tijd willen besparen en toch een prachtige oogopslag willen behouden.',
  //     Image: {
  //       create: [
  //         //desktop & mobile priceslider
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 19,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 20,
  //         },
  //       ],
  //     },
  //     Type: 'Wimpers & wenkbrauwen lakken',
  //     Options: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 12,
  //         },
  //       ],
  //     },
  //   },
  // })
  // const gelnagels = await db.service.create({
  //   data: {
  //     Category: Category.Beauty,
  //     Subcategory: 'Nagels',
  //     name: 'Gelnagels',
  //     Description:
  //       'Gelnagels zijn de ultieme manier om je nagels (handen en voeten) te transformeren tot ware kunstwerken! Met hun duurzaamheid, veelzijdigheid en schitterende uitstraling, zijn gelnagels de keuze voor iedereen die er altijd op zijn best uit wil zien.Of je nu op zoek bent naar een verfijnde en klassieke look of juist iets gewaagders wilt proberen, gelnagels bieden eindeloze mogelijkheden voor nagelkunst en blijven er perfect uitzien, waar je ook gaat. Transformeer je nagels en verwen jezelf met de prachtige wereld van gelnagels!',
  //     Image: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 6,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           imageId: 10,
  //         },
  //       ],
  //     },
  //     Type: 'Ontspannend',
  //     Options: {
  //       create: [
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 1,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 2,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 3,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 4,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 5,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 6,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 7,
  //         },
  //         {
  //           assignedBy: 'Thomas Van Opstal',
  //           optionId: 8,
  //         },
  //       ],
  //     },
  //   },
  // })
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
