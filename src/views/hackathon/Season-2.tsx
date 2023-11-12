import { User, UserSchema } from '@/types/user'
import { useGlobalUser } from '@/hooks/useGlobalUser'
import { useHackathon } from '@/hooks/useHackathon'
import ProfileCard from '@/components/ProfileCard'
import { Participants } from '@/assets'
import RegistrationForm from '@/components/RegistrationForm'

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

  return (
    <div>
      <div className="my-9 flex flex-col items-center">
        <img
          src={Participants}
          alt="Hackathon Season 2 Participants"
          className="w-3/6"
        />
      </div>
      <div className="container flex-col justify-center px-5 md:mx-auto md:px-0">
        <div className="grid grid-cols-1 lg:gap-10 md:gap-5 gap-3 md:grid-cols-2 lg:grid-cols-6">
          {isUserInHackathonParticipants() ? (
            hackathon?.participants?.map((participant: User) => (
              <ProfileCard user={participant} />
            ))
          ) : (
            <RegistrationForm userId={user.userId} />
          )} 
        </div>
      </div>
    </div>
  )
}

export default Season2
