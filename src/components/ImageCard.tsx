import { useState } from 'react'
import daedalus from '../assets/png/DAEDALUS-WHITE.png'

const ImageCard = ({ idx }: { idx: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      key={idx}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card relative col-span-full h-96 w-full overflow-hidden shadow-xl md:col-span-6 lg:col-span-3 ${
        isHovered ? 'image-full' : ''
      }`}
    >
      {/* <figure>
        <img src="https://picsum.photos/400/200" alt={`Image ${idx}`} />
      </figure> */}
      <div className='bg-gradient-to-b h-full from-[#04bfd87f] to-[#11113A] outline-[#39395B] flex flex-col justify-center items-center'>
        <img className='w-1/2 h-1/2' src={daedalus}></img>
        <h1 className='font-bold text-white mt-3 lg:text-3xl'>D'Rocketeers</h1>
      </div>

      <div className={`card-body text-center bg-gradient-to-b from-[#1A1A48] to-[#06062c] justify-between ${!isHovered ? 'hidden' : ''}`}>
        <h2 className="card-title text-white text-3xl font-bold">Daedalus Voting System</h2>
        <a href='#' className='decoration-solid'>Visit site</a>
        <h5>Members:</h5>
        <div className="card-actions justify-center">
          <button className="btn bg-white hover:bg-[#11113A] text-[#11113A] w-full hover:text-white">VOTE</button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
