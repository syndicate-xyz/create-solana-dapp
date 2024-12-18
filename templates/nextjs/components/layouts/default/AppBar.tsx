'use client'

import { WalletMultiButton } from '@/components/dynamic/WalletAdapters'
import Link from 'next/link'

const AppBar = () => {
  // const { publicKey } = useWallet()
  // const balanceQuery = useGetBalance({ address: publicKey! })

  // useEffect(() => {
  //   if (!publicKey) return

  //   console.log('balanceQuery', balanceQuery.data)
  // }, [balanceQuery, publicKey])

  return (
    <div className='border-b border-gray-800/50 backdrop-blur-xl'>
      <div className='lg:max-w-7xl mx-auto p-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4 md:gap-8'>
            <Link href={'/'}>
              <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                My Dapp
              </h1>
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppBar
