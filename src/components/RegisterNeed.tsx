import { Hero } from '@/assets'
import { Link } from 'react-router-dom'
export const RegisterNeed = () => {
  return (
    <div className="col-span-2 mx-3 mt-16 rounded-2xl border-background-lighter bg-[#2020537e] p-3 text-center outline outline-2 outline-[#7979c436] sm:p-4 md:col-start-2 md:mx-0 md:p-5 lg:col-start-3 lg:mt-20 lg:p-8">
      <div className="grid h-full w-full place-content-center ">
        <h3 className="md:text-1xl bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
          YOU NEED TO REGISTER FIRST
        </h3>
        <img src={Hero} alt="" className="my-5" />
        <Link
          to="/hackathon/season-1"
          className="btn row-span-1 mt-3 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-4 lg:mt-5 lg:w-full lg:px-12"
        >
          Register Now
        </Link>
      </div>
    </div>
  )
}
