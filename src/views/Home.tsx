import { Link } from 'react-router-dom'

import { Hero, Man, Cube } from '@/assets'
const Home = () => {
  return (
    <div className="container mx-auto px-5 pt-5 md:pt-16 lg:pt-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:gap-x-10 lg:grid-rows-4">
        <div className="relative col-span-1 row-span-1 grid place-content-end text-center md:text-left lg:row-span-3 lg:place-items-end">
          {/* <img src={Radial} className='absolute w-[7rem] left-40 top-14'></img> */}
          <h3 className="bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-6xl">
            DAEDALUS HACKATHON
          </h3>
          <ul className="my-2 flex flex-col gap-1 md:my-3 md:text-xl lg:my-5 lg:text-2xl">
            <li> 💥 Ready to witness innovation at its peak? </li>
            <li>
              🔔 Join us in the ultimate showdown of brilliance at Hackathon
              Season 1!
            </li>
            <li>
              📢 Your vote is a game-changer, propelling an ingenious team to
              victory. Be the catalyst of change and shape the future together.
            </li>
            <li> ✍ Vote now and be part of the revolution!</li>
            <li className="mt-8">
              <b> #Daedalus #HackathonSeason1 #VoteForInnovation </b>
            </li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1 grid place-content-center justify-items-center md:row-span-3 lg:row-span-5">
          <img
            src={Hero}
            alt="hero"
            className="max-w-xs md:w-full lg:max-w-full"
          />
        </div>
        <Link
          to="/hackathon/season-1"
          className="btn row-span-1 mt-3 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-4 lg:mt-5 lg:w-3/12 lg:px-12"
        >
          VOTE NOW!
        </Link>
      </div>

      {/* Announcement Section */}
      <div className="container-full relative mt-10 grid grid-cols-1 rounded-[25px] bg-[#2020537e] p-5 outline md:mt-20 md:grid-cols-4 md:gap-5 md:p-10 lg:mt-72 lg:gap-10">
        <div className="static grid place-items-center justify-items-center md:static md:col-span-2 lg:relative lg:col-span-1">
          <img
            src={Man}
            alt="image"
            className=" bottom-3 z-10 max-w-[15rem] md:max-w-full lg:absolute lg:max-w-full"
          />
        </div>

        <div className="grid text-center md:col-span-2 md:text-start lg:col-span-3">
          <h1 className="mb-3 mt-3 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent md:mt-0 md:text-4xl lg:text-5xl">
            HAPPENING NOW!
          </h1>
          <h2 className="mb-3 text-xl font-bold italic text-white md:text-2xl">
            Hackathon Season 2
          </h2>
          <ul className="flex flex-col gap-1 md:text-xl lg:text-2xl">
            <li> 🎯 Dive into the Daedalus Hackathon! </li>
            <li>
              📅 1 week, 3-person dream teams, and endless web apppossibilities!
            </li>
            <li>
              💠 MERN, LAMPP, or your own secret stack, it's a web stack
              free-for-all!
            </li>
            <li>
              💡 Learn, code, and conquer with expert advice, all for FREE!
            </li>
            <li>
              🏆 Cash prizes, domain names, and a week of coding bliss await!
            </li>
            <li> 📌 Don't miss out, let the hacking begin! </li>
            <li className="mt-8">
              <b> #DaedalusHackathon #CodeDreams #WebStackWarfare </b>
            </li>
          </ul>
          <Link
            to="hackathon/season-2"
            className="btn row-span-1 mt-3 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-4 lg:mt-5 lg:w-3/12 lg:px-12"
          >
            Register
          </Link>
          <img
            src={Cube}
            alt="cube"
            className="top-[-3rem] z-10 max-w-0 md:absolute md:right-0 md:max-w-[7rem] lg:absolute lg:right-[-2rem] lg:max-w-[10rem]"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
