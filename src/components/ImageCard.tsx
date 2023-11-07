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
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#04bfd87f] to-[#11113A] outline-[#39395B]">
        <img className="h-1/2 w-1/2" src={daedalus}></img>
        <h1 className="mt-3 font-bold text-white lg:text-3xl">D'Rocketeers</h1>
      </div>

      <div
        className={`card-body justify-between bg-gradient-to-b from-[#1A1A48] to-[#06062c] text-center ${
          !isHovered ? 'hidden' : ''
        }`}
      >
        <h2 className="card-title text-3xl font-bold text-white">
          Daedalus Voting System
        </h2>
        <a href="#" className="decoration-solid">
          Visit site
        </a>
        <h5>Members:</h5>
        <div className="card-actions justify-center">
          <button className="btn w-full bg-white text-[#11113A] hover:bg-[#11113A] hover:text-white">
            VOTE
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
