import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="pb-6 pt-24 text-center">
      <h5>
        &copy; {currentYear}{' '}
        <Link
          to={'https://github.com/eggzylog/voting-system/'}
          target="_blank"
          className="font-semibold text-blue-400 hover:animate-pulse"
        >
          D'Rocketeers 🚀
        </Link>{' '}
        All rights reserved
      </h5>
    </div>
  )
}

export default Footer
