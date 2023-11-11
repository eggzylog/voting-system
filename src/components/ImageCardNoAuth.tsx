import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignInButton, SignedOut } from '@clerk/clerk-react'

import { DaedalusWhite } from '@/assets'
import { Team } from '@/types/team'

const ImageCardNoAuth = ({ idx, team }: { idx: number; team: Team }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      key={idx}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card relative col-span-full col-start-2 col-end-12 h-96 w-full overflow-hidden shadow-xl md:col-span-6 lg:col-span-4 xl:col-span-3 ${
        isHovered ? 'image-full' : ''
      }`}
    >
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#04bfd87f] to-[#11113A] outline-[#39395B]">
        <img src={DaedalusWhite} alt="Daedalus White Logo" className="h-1/2 w-1/2" />
        <h1 className="mt-3 font-bold text-white lg:text-3xl">D'Rocketeers</h1>
      </div>

      <div
        className={`card-body justify-between bg-gradient-to-b from-[#1A1A48] to-[#06062c] text-center ${
          !isHovered ? 'hidden' : ''
        }`}
      >
        <h2 className="card-title flex justify-center text-3xl font-bold text-white">
          <span className="block max-w-[15ch] overflow-hidden whitespace-nowrap">
            {team.name}
          </span>
        </h2>
        <Link
          to="https://daedalus.codes" // replace with teams' project link
          target="_blank"
          className="underline underline-offset-4"
        >
          Visit site
        </Link>
        <h5>Members:</h5>
        <ul>
          {team.members.map((member) => (
            <li key={member.userId}>{member.username}</li>
          ))}
        </ul>

        <div className="card-actions justify-center">
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/">
              <button className="btn w-full bg-white text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline">
                VOTE
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default ImageCardNoAuth
