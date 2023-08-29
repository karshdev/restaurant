"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

type props={
children:React.ReactNode
}
const queryClient = new QueryClient()
const QueryProvider = ({children}:props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
