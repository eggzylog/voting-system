import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-10 grid h-fit grid-cols-6 grid-rows-3">
        <Link title="About" to="/about"></Link>
      </div>
    </>
  )
}

export default About
