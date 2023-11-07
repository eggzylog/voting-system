import HeightScreen from '../components/HeightScreen'
import SignIn from '../views/SignIn'

const GuestLayout = () => {
  return (
    <div className="dark:bg-slate-800">
      <HeightScreen>
        <SignIn />
      </HeightScreen>
    </div>
  )
}

export default GuestLayout
