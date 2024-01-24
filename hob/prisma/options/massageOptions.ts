import { Category } from '@prisma/client'
import { db } from '../seed'

export async function massageOptions() {
  const nekMassage = await db.option.upsert({
    where: {
      id: 9,
    },
    update: {},
    create: {
      Category: Category.Body,
      Subcategory: ['Massage', 'Ontspannend', 'Hoofd, nek en schoudermassage'],
      Description:
        'Een hoofd-, nek- en schoudermassage is een verkwikkende behandeling die specifiek gericht is op het hoofd, de nek en de schouders. Deze massage biedt niet alleen onmiddellijke ontspanning, maar heeft ook tal van voordelen voor zowel de geest als het lichaam. Deze verfrissende behandeling is ideaal voor diegenen die op zoek zijn naar een snelle ontsnapping uit de dagelijkse stress.Laat ons u verwennen met onze verfrissende hoofd-, nek- en schoudermassage. Geniet van de voordelen van ontspanning, pijnverlichting en een algeheel gevoel van welzijn.',
      Price: [35, 60, 90],
      Time: [30, 60, 120],
      Image: {
        create: [
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 5,
          },
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 8,
          },
          {
            assignedBy: 'Thomas Van Opstal',

            imageId: 9,
          },
        ],
      },
      Name: 'Hoofd, nek en schoudermassage',
    },
  })
  const voetMassage = await db.option.upsert({
    where: {
      id: 10,
    },
    update: {},
    create: {
      Category: Category.Body,
      Subcategory: ['Massage', 'Ontspannend', 'Voet- en beenmassage'],
      Description:
        'Trakteer uzelf op pure verwennerij met onze voet- en beenmassage! Laat de stress van uw dagelijkse beslommeringen smelten terwijl wij uw vermoeide voeten en benen in de watten leggen. Deze massage is niet alleen een genot voor de zintuigen, maar biedt ook voordelen zoals stressvermindering, pijnverlichting en een betere bloedcirculatie. Het is de perfecte manier om te ontsnappen aan de drukte van het dagelijks leven en wat welverdiende rust te vinden. Waar wacht u nog op? Gun uzelf dit heerlijke moment van ontspanning en herstel. Boek vandaag nog uw voet- en beenmassage en stap met vernieuwde energie de wereld weer in! ',
      Price: [35, 60, 90],
      Time: [30, 60, 120],
      Name: 'Voet- en beenmassage',
    },
  })
}
