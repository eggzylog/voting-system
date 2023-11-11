import { User } from '@/types/user'

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <>
      <div className="col-span-1 grid w-full grid-cols-3 grid-rows-3 gap-x-5 rounded-2xl border-background-lighter bg-[#2020537e] p-3 text-white  outline outline-2 outline-[#7979c436]">
        <img
          src={user.profileImageURL || 'https://picsum.photos/200/300'} // or any default image placeholder
          alt="avatar"
          className="col-span-1 row-span-3 h-full w-full rounded-xl bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 p-1"
        />
        <h1 className="col-span-2 row-span-1 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
          {user.username}
        </h1>
        <h2 className="col-span-2 row-span-1 text-xl">Developer</h2>
        <button className="col-span-2 w-full rounded-xl bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 ">
          Github
        </button>
      </div>
    </>
  )
}

export default ProfileCard
