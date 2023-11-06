import { useState } from 'react'

const ImageCard = ({ idx }: { idx: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      key={idx}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`card relative col-span-full h-48 w-96 overflow-hidden bg-base-100 shadow-xl md:col-span-6 lg:col-span-4 ${
        isHovered ? 'image-full' : ''
      }`}
    >
      <figure>
        <img src="https://picsum.photos/400/200" alt={`Image ${idx}`} />
      </figure>

      <div className={`card-body ${!isHovered ? 'hidden' : ''}`}>
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
