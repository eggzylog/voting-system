import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      {/* company logo */}
      <div className="flex-1">
        <Link to={'/'} className="btn btn-ghost text-xl normal-case">
          daisyUI
        </Link>
      </div>

      <div className="flex-none gap-2">
        {/* links */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={'/hackathon'}>Hackathon</NavLink>
            </li>
          </ul>
        </div>

        {/* profile photo */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <img src="https://picsum.photos/100/100" alt="profile photo" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
