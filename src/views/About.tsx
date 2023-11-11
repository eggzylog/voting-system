import { Link } from 'react-router-dom'
import RegistrationForm from '@/components/RegistrationForm'

const About = () => {
  return (
    <>
      <div className="container h-fit grid grid-cols-6 grid-rows-3 mx-auto mt-10">
        <Link title="About" to="/about"></Link>
        <RegistrationForm />
      </div>
    </>
  )
}

export default About
