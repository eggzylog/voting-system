import { Avatar } from '@/assets'

const ProfileCard = () => {
  return (
    <>
      <div className="col-span-1 text-white outline outline-2 grid gap-x-5 grid-rows-3 grid-cols-3 border-background-lighter bg-[#2020537e] outline-[#7979c436]  w-full p-3 rounded-2xl">
        <img src={Avatar} alt="avatar" className='w-full h-full rounded-xl col-span-1 row-span-3 p-1 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500' />
        <h1 className='col-span-2 row-span-1 font-bold text-3xl bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-transparent'>Enigma</h1>
        <h2 className='col-span-2 row-span-1 text-xl'>Front-end Developer</h2>
        <button className='col-span-2 rounded-xl bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 w-full '>Github</button>
      </div>
    </>
  )
}

export default ProfileCard
