import { User, UserSchema } from '@/types/user'
import { useGlobalUser } from '@/hooks/useGlobalUser'
import { useHackathon } from '@/hooks/useHackathon'
import ProfileCard from '@/components/ProfileCard'
import { Participants } from '@/assets'

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
          src={Participants}
          alt="Hackathon Season 2 Participants"
          className="w-3/6"
        />
      </div>
      <div className="md:mx-auto md:px-0 px-5 container flex-col justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
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
