import { Link } from 'react-router-dom'
import ProfileCard from '@/components/ProfileCard'

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-10 block">
        <Link title="About" to="/about">
          <div className='grid gap-10 grid-cols-3'>
            <ProfileCard />
          </div>
        </Link>
      </div>
    </>
  )
}

export default About
