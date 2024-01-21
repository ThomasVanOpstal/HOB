import { z } from 'zod'
import { publicProcedure } from './trpc'
import { Category, Prisma } from '@prisma/client'
import { db } from '@/lib/db'

export const getAllServices = publicProcedure.query(async () => {
  const items = await db.service.findMany({
    include: {
      Options: {
        include: {
          Option: true,
        },
      },

      Image: {
        include: {
          Image: true,
        },
      },
    },
  })
  return items
})

export const getServiceByCategory = publicProcedure
  .input(
    z.object({
      Category: z.string().optional(),
    })
  )
  .query(async (opts) => {
    const categoryAsEnum =
      Category[opts.input.Category as keyof typeof Category]

    const items = await db.service.findMany({
      where: {
        Category: categoryAsEnum,
      },
      include: {
        Image: {
          include: {
            Image: true,
          },
        },
      },
    })
    return items
  })

export const getServices = publicProcedure
  .input(
    z.object({
      Service: z.string().optional(),
    })
  )
  .query(async (opts) => {
    const items = await db.service.findFirst({
      where: {
        name: opts.input.Service,
      },
      include: {
        Options: {
          include: {
            Option: {
              include: {
                Image: {
                  include: {
                    Image: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    return items
  })
export type ServiceByCategory = Prisma.ServiceGetPayload<{
  include: {
    Image: {
      include: {
        Image: true
      }
    }
  }
}>

export type Service = Prisma.ServiceGetPayload<{
  include: {
    Options: {
      include: {
        Option: {
          include: {
            Image: {
              include: {
                Image: true
              }
            }
          }
        }
      }
    }
  }
}>
export type Services = Prisma.ServiceGetPayload<{
  include: {
    Options: {
      include: {
        Option: true
      }
    }
    Image: {
      include: {
        Image: true
      }
    }
  }
}>
