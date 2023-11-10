import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex justify-center gap-1 pb-6 pt-24 text-center max-sm:flex-col">
      <h5>
        &copy; {currentYear}{' '}
        <Link
          to={'https://github.com/eggzylog/voting-system/'}
          target="_blank"
          className="font-semibold text-blue-400 hover:animate-pulse"
        >
          D'Rocketeers 🚀
        </Link>{' '}
      </h5>
      <span>All rights reserved</span>
    </div>
  )
}

export default Footer
