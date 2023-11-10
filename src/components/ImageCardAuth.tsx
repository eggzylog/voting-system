import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'

import daedalus from '@/assets/png/DAEDALUS-WHITE.png'
import { Team } from '@/types/team'
import { useGlobalUser } from '@/hooks/useGlobalUser'
import { useVote } from '@/hooks/useVote'

const ImageCardAuth = ({ idx, team }: { idx: number; team: Team }) => {
  const { user } = useGlobalUser()

  const { hasVote, setHasVote } = useVote()

  const [isHovered, setIsHovered] = useState(false)

  const handleVote = async () => {
    const voteData: { hackathonId: number; userId: number; teamId: number } = {
      hackathonId: 1,
      userId: user.userId,
      teamId: team.teamId
    }

    console.log('User ID: ' + user.userId)
    console.log('Team ID: ' + team.teamId)

    const res = await fetch('api/v1/votes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(voteData)
    })

    if (res.status == 200) setHasVote(true)
  }

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
        <img src={daedalus} alt="daedalus" className="h-1/2 w-1/2" />
        <h1 className="mt-3 font-bold text-white lg:text-3xl">D'Rocketeers</h1>
      </div>

      <div
        className={`card-body justify-between bg-gradient-to-b from-[#1A1A48] to-[#06062c] text-center padding-top: bottom-5 ${
          !isHovered ? 'hidden' : ''
        }`}
      >
        <h2 className="card-title text-3xl font-bold text-white justify-center">
          {team.name || 'Daedalus Voting System'}
        </h2>
        <Link
          to="https://daedalus.codes/"
          target="_blank"
          className="decoration-solid"
        >
          Visit site
        </Link>
        <h5>Members:</h5>
        <ul>
          {team.members.map((member) => (
            <li key={member.userId} className="p-1">
              {member.username}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-center">
          {/* If the user is SignedOut, have the button show the SignIn modal when clicked */}
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/">
              <button className="btn w-full bg-white text-[#11113A] hover:bg-[#11113A] hover:text-white">
                VOTE
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button
              className="btn w-full bg-white text-[#11113A] hover:bg-[#11113A] hover:text-white"
              // Add the Vote logic here 👇
              disabled={hasVote}
              onClick={handleVote}
            >
              VOTE
            </button>

            {hasVote && <p>Votes: {team.votes}</p>}
            {hasVote && team.votePercentage != null && (
              <p>Vote percentage: {team.votePercentage}</p>
            )}
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default ImageCardAuth
