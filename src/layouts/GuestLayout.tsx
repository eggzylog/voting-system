import HeightScreen from '../components/HeightScreen'
import SignIn from '../views/SignIn'

const GuestLayout = () => {
  return (
    <div className="dark:bg-[#11113A]">
      <div className='bg-blob bg-no-repeat bg-[center-center]'> 
        <HeightScreen>
        <SignIn />
        </HeightScreen>
      </div>
    </div>
  )
}

export default GuestLayout
