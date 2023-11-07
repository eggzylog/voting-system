import ImageCard from '../components/ImageCard'

const Home = () => {
  return (
    <>
      <h1 className="text-center uppercase">Hackathon Teams</h1>
      <div className="grid grid-cols-12 gap-8 py-12">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ImageCard key={idx} idx={idx} />
        ))}
      </div>
    </>
  )
}

export default Home
