import { useState } from 'react'

import { User, UserSchema } from '@/types/user'
import { useGlobalUser } from '@/hooks/useGlobalUser'
import { useHackathon } from '@/hooks/useHackathon'

const Season2 = () => {
  const globalUser = useGlobalUser()
  const user = UserSchema.parse(globalUser.user)

  const { hackathon } = useHackathon()

  console.log(user)
  console.log(hackathon)

  const [isParticipant, setIsParticipant] = useState(
    hackathon.participants?.includes(user)
  )

  // const participantUser: User | undefined = hackathon.participants?.find(
  //   (participant: User) => {
  //     return participant.userId == user.userId
  //   }
  // )

  // if (participantUser != undefined) setIsParticipant(true)

  const handlePreRegister = async () => {
    const res = await fetch('api/v1/hackathons/2/participants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ userId: user.userId })
    })

    if (res.status == 200) setIsParticipant(true)
  }

  return (
    <>
      <p>{hackathon?.name}</p>
      <p>{hackathon?.description}</p>
      {/* more stuff here */}

      {isParticipant ? (
        hackathon?.participants?.map((participant: User) => (
          <div className="h-5 bg-white">
            <p> Participant: {participant.username}</p>
          </div>
        ))
      ) : (
        <button className="bg-white" onClick={handlePreRegister}>
          Hello
        </button>
      )}
    </>
  )
}

export default Season2
