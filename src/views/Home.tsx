import ImageCard from '../components/ImageCard'
import hack from '@/assets/png/hack.png'

const Home = () => {
  return (
    <>
      <div className='flex flex-col items-center mt-9'>
        <img src={hack} className='w-1/3'></img>
      </div>
      <div className="grid grid-cols-12 gap-8 py-12">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ImageCard key={idx} idx={idx} />
        ))}
      </div>
    </>
  )
}

export default Home
