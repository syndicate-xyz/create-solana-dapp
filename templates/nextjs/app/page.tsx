'use client'

import DefaultLayout from '@/components/layouts/default/DefaultLayout'
import { defaultClusters, useCluster } from '@/contexts/ClusterProvider'
import { useGetBalance } from '@/hooks/solana-query-hooks'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'

export default function Home() {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const { data } = useGetBalance({ address: publicKey })

  useEffect(() => {
    console.log(connection.rpcEndpoint)
  }, [connection])

  return (
    <DefaultLayout>
      <p>Hello World</p>
    </DefaultLayout>
  )
}
