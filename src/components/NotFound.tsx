import { useNavigate } from 'react-router-dom'

import HeightScreen from '@/components/HeightScreen'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-blob bg-right bg-no-repeat dark:bg-[#11113A]">
      <HeightScreen>
        <h2 className="text-4xl">Not Found</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
      </HeightScreen>
    </div>
  )
}

export default NotFound
