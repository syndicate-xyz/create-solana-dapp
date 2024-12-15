'use client'

import { WalletError } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { useCallback, useMemo } from 'react'

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'
import { useCluster } from './ClusterProvider'

export const WalletAdapterProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { cluster } = useCluster()
  const endpoint = useMemo(() => cluster.endpoint, [cluster])
  const onError = useCallback((error: WalletError) => {
    console.error('wallet error', error)
  }, [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} onError={onError} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
