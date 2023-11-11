import hack from '@/assets/png/hack.png'
import { User, UserSchema } from '@/types/user'
import { useGlobalUser } from '@/hooks/useGlobalUser'
import { useHackathon } from '@/hooks/useHackathon'
import ProfileCard from '@/components/ProfileCard'

const Season2 = () => {
  const globalUser = useGlobalUser()
  const user = UserSchema.parse(globalUser.user)

  const { hackathon } = useHackathon()

  console.log(user)
  console.log(hackathon)

  const isUserInHackathonParticipants = () => {
    return hackathon.participants?.some(
      (participant) => participant.userId === user.userId
    )
  }

  const handlePreRegister = async () => {
    const res = await fetch('api/v1/hackathons/2/participants', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ userId: user.userId })
    })
    console.log(res) // what to do with this
  }

  return (
    <div>
      <div className="my-9 flex flex-col items-center">
        <img
          src={hack}
          alt="Hackathon Season 2 Participants"
          className="w-1/3"
        />
      </div>
      <div className="mx-auto w-3/4 flex-col justify-center">
        <div className="grid grid-cols-2 gap-10">
          {isUserInHackathonParticipants() ? (
            hackathon?.participants?.map((participant: User) => (
              <ProfileCard user={participant} />
            ))
          ) : (
            <button className="bg-white" onClick={handlePreRegister}>
              Register here
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Season2
