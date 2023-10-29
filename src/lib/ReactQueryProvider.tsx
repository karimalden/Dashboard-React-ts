import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

function QueryProvider({ children }: any) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider  client={queryClient}>
      {children}
    </QueryClientProvider>

  )
}

export default QueryProvider