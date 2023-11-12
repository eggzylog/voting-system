import { useNavigate } from 'react-router-dom'

import HeightScreen from '@/components/HeightScreen'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <HeightScreen>
      <h2 className="text-4xl">Not Found</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
    </HeightScreen>
  )
}

export default NotFound
