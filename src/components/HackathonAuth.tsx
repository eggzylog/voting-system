import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import Cube from '@/assets/png/cube.png'
import hack from '@/assets/png/hack.png'
import Man from '@/assets/png/man.png'
import { Team, TeamSchema } from '@/types/team'
import ImageCardAuth from './ImageCardAuth'
import ImageCardNoAuth from './ImageCardNoAuth'
import Loading from './Loading'

const Hackathon = () => {
  const {
    isLoading: isTeamsLoading,
    error: isTeamsError,
    data: teams
  } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await fetch('/api/v1/hackathons/1/teams')
      const data = (await res.json()) as { teams: Team[] }

      const teams = data.teams.map((team) => TeamSchema.parse(team))

      return teams
    }
  })

  if (isTeamsLoading) return <Loading />

  if (isTeamsError) return 'An error has occurred: ' + isTeamsError.message

  console.log(teams)

  return (
    <>
      <div className="mt-9 flex flex-col items-center">
        <img src={hack} alt="Hackathon Teams" className="w-1/3" />
      </div>

      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-12 gap-8 py-12">
          <SignedOut>
            {teams?.map((team) => (
              <ImageCardNoAuth
                key={team.teamId}
                idx={team.teamId}
                team={team}
              />
            ))}
          </SignedOut>
          <SignedIn>
            {teams?.map((team) => (
              <ImageCardAuth key={team.teamId} idx={team.teamId} team={team} />
            ))}
          </SignedIn>
        </div>
      </div>

      <div className="container-full relative mx-2 mt-10 grid grid-cols-1 rounded-[25px] bg-[#2020537e] p-5 outline md:mt-20 md:grid-cols-4 md:gap-5 md:p-10 lg:mt-72 lg:gap-10">
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
            Hackathon Season 1
          </h2>
          <ul className="text-left text-sm leading-6 sm:text-justify md:text-xl">
            <li>🚀 Ready to witness innovation at its peak?</li>
            <li>
              🌟 Join us in the ultimate showdown of brilliance at Hackathon
              Season 1!
            </li>
            <li>
              🏆 Your vote is the game-changer, propelling the most ingenious
              team to victory. Embrace the excitement, be the catalyst of
              change, and let's shape the future together!
            </li>
            <li>🚀 Vote now and be part of the revolution! 🚀</li>
            <li className="mt-6 font-bold">
              #HackathonSeason1 #VoteForInnovation 🚀
            </li>
          </ul>
          <img
            src={Cube}
            alt="cube"
            className="top-[-3rem] z-10 max-w-0 md:absolute md:right-0 md:max-w-[7rem] lg:absolute lg:right-[-2rem] lg:max-w-[10rem]"
          />
        </div>
      </div>
    </>
  )
}

export default Hackathon
