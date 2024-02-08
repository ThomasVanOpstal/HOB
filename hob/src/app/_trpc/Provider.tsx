'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import React, { useState } from 'react'

import { trpc } from './client'
const url = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://HouseofBeautybyLauren/api/trpc`
  : 'http://localhost:3000/api/trpc'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}))
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url,
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'same-origin',
            })
          },
        }),
      ],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
