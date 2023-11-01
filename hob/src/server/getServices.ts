import { z } from 'zod'
import { publicProcedure } from './trpc'
import { Prisma } from '@prisma/client'
import { db } from '@/lib/db'

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
