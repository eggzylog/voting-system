import ImageCard from '@/components/ImageCard'
import hack from '@/assets/png/hack.png'

const Home = () => {
  return (
    <>
      <div className="mt-9 flex flex-col items-center">
        <img src={hack} alt="Hackathon Teams" className="w-1/3" />
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
