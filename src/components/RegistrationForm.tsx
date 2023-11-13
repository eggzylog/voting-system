import { useState } from 'react'

import {
  CompMan
  // Cube,
  // FloatMan,
  // Polygon
} from '@/assets'

const apiVersion = import.meta.env.VITE_API_VERSION

const RegistrationForm = ({ userId }: { userId: number }) => {
  const [isClicked, setIsClicked] = useState(false)
  const frontEndRating = 0
  const backEndRating = 0
  const uiUxRating = 0

  const handleClick = (value: number, category: string) => {
    console.log(`Selected rating for ${category}: ${value}`)
    setIsClicked(!isClicked)

    const ratings = document.querySelectorAll(`.${category}`)
    ratings.forEach((rating, index) => {
      if (index + 1 <= value) {
        rating.classList.add('clicked')
      } else {
        rating.classList.remove('clicked')
      }
    })
  }

  const renderRatingButtons = (category: string, rating: number) => {
    console.log(rating)
    const ratingButtons = []
    for (let i = 1; i <= 5; i++) {
      ratingButtons.push(
        <input
          key={i}
          type="button"
          value={i}
          className={`rate ${category}`}
          onClick={() => handleClick(i, category)}
        />
      )
    }
    return ratingButtons
  }

  const handlePreRegister = async () => {
    const res = await fetch(`api/${apiVersion}/hackathons/2/participants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ userId: userId })
    })
    console.log(res)
  }

  return (
    <div className="row-span-3 grid grid-rows-[_1fr,25rem] gap-x-5 rounded-2xl border-background-lighter bg-[#2020537e] p-4 text-center outline outline-2 outline-[#7979c436] sm:grid-rows-2 md:col-span-2 md:p-6 lg:col-span-4 lg:col-start-2 lg:grid-cols-4 lg:grid-rows-none lg:p-8">
      <div className="md:col-span-1 lg:col-span-2">
        <form action="submit" method="post" onSubmit={handlePreRegister}>
          <h3 className="mb-4 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-3xl">
            REGISTRATION FORM
          </h3>
          <input
            type="text"
            name="userName"
            id="username"
            placeholder="Username"
            className="my-4 h-[3rem] w-full rounded-xl border-background-lighter bg-[#2020537e] p-3 outline outline-2 outline-[#7979c436] hover:outline-white focus:bg-[#ffffff18] focus:outline-white"
          />
          <div>
            <p className="text-xl font-bold text-white">Front-End Skill</p>
            <div className="my-4 grid grid-cols-5 gap-2 font-bold">
              {renderRatingButtons('front-end', frontEndRating)}
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-white">Back-End Skill</p>
            <div className="my-4 grid grid-cols-5 gap-2 font-bold">
              {renderRatingButtons('back-end', backEndRating)}
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-white">UI/UX Skill</p>
            <div className="my-4 grid grid-cols-5 gap-2 font-bold">
              {renderRatingButtons('ui-ux', uiUxRating)}
            </div>
          </div>
          <button
            type="submit"
            className="btn mt-5 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-0 lg:ms-auto lg:px-12"
          >
            REGISTER
          </button>
        </form>
      </div>

      {/* Image */}
      <div className="relative grid place-items-center lg:col-span-2">
        {/* <img src={FloatMan} alt="" />
        <img src={Polygon} alt="" className='w-1/4 absolute right-0 top-[-3rem]'/>
        <img src={Cube} alt="" className='w-1/4 absolute left-28 bottom-0' /> */}
        <img
          src={CompMan}
          alt="Comp man"
          className="absolute sm:w-5/6 md:bottom-[-1rem] md:w-2/3 lg:bottom-[-2rem] lg:w-full"
        />
      </div>
    </div>
  )
}

export default RegistrationForm
