import { Link } from 'react-router-dom'
import RegistrationForm from '@/components/RegistrationForm'

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-10 grid h-fit grid-cols-6 grid-rows-3">
        <Link title="About" to="/about"></Link>
        <RegistrationForm />
      </div>
    </>
  )
}

export default About
