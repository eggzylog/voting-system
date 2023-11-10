import { Link, Outlet } from 'react-router-dom'

const Hackathon = () => {
  return (
    <>
      <div className="block">
        <Link title="hackathon_season-1" to="/hackathon/season-1">
          Hackathon Season 1
        </Link>
      </div>
      <div className="block">
        <Link title="hackathon_season-2" to="/hackathon/season-2">
          Hackathon Season 2
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Hackathon
