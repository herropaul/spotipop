import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
      <div className='text-xl text-center'>Which Artist is more popular?</div>
      <div className=' p-3'/>
      <div className=' border border-black rounded p-8 flex justify-between max-w-2xl items-center'>
        <div className='h-32 w-32 rounded-full bg-green-900'></div>
        <div className='px-10'>Or</div>
        <div className='h-32 w-32 rounded-full bg-green-900'></div>
      </div>
      
    </div>
  )
}

export default Home
