import AppBar from './AppBar'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className=''>
      {/* Top Navigation */}
      <AppBar />

      {/* Main Content */}
      <div className='max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-8'>
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
