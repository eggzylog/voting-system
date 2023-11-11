import React, { useState } from 'react';
import { CompMan, Cube, FloatMan, Polygon } from '@/assets';

const RegistrationForm = () => {
  const [isClicked, setIsClicked] = useState(false);
  const frontEndRating = useState(0);
  const backEndRating = useState(0);
  const uiUxRating = useState(0);

  const handleClick = (value, category) => {
    console.log(`Selected rating for ${category}: ${value}`);
    setIsClicked(!isClicked);
    
    const ratings = document.querySelectorAll(`.${category}`);
    ratings.forEach((rating, index) => {
      if (index + 1 <= value) {
        rating.classList.add('clicked');
      } else {
        rating.classList.remove('clicked');
      }
    });
  };

  const renderRatingButtons = (category, rating) => {
    const ratingButtons = [];
    for (let i = 1; i <= 5; i++) {
      ratingButtons.push(
        <input
          key={i}
          type="button"
          value={i}
          className={`rate ${category}`}
          onClick={() => handleClick(i, category)}
        />
      );
    }
    return ratingButtons;
  };
  
  
  return (
    <div className="col-span-4 col-start-2 grid gap-x-5 grid-cols-4 row-span-3 lg:p-8 text-center rounded-2xl border-background-lighter bg-[#2020537e] outline outline-2 outline-[#7979c436]">
      <div className='col-span-2'>
        <form action="submit" method="post">
          <h3 className="bg-gradient-to-r mb-4 from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-3xl">
            REGISTRATION FORM
          </h3>
          <input
            type="text"
            name="userName"
            id="username"
            placeholder="Username"
            className="border-background-lighter bg-[#2020537e] rounded-xl h-[3rem] w-full p-3 focus:outline-white my-4 focus:bg-[#ffffff18] outline outline-2 outline-[#7979c436] hover:outline-white"
          />
          <div>
            <p className="text-xl font-bold text-white">Front-End Skill</p>
            <div className="grid grid-cols-5 gap-2 font-bold my-4">
              {renderRatingButtons('front-end', frontEndRating)}
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-white">Back-End Skill</p>
            <div className="grid grid-cols-5 gap-2 font-bold my-4">
              {renderRatingButtons('back-end', backEndRating)}
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-white">UI/UX Skill</p>
            <div className="grid grid-cols-5 gap-2 font-bold my-4">
              {renderRatingButtons('ui-ux', uiUxRating)}
            </div>
          </div>
          <button
            type='submit'
            className="btn mt-5 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-0 lg:ms-auto lg:w-full lg:px-12"
          >   REGISTER
          </button>
        </form>
      </div>

      {/* Image */}
      <div className='col-span-2 relative'>
        {/* <img src={FloatMan} alt="" />
        <img src={Polygon} alt="" className='w-1/4 absolute right-0 top-[-3rem]'/>
        <img src={Cube} alt="" className='w-1/4 absolute left-28 bottom-0' /> */}
        <img src={CompMan} alt="" className='w-full absolute lg:bottom-[-2rem]'/>
      </div>
    </div>
  );
};

export default RegistrationForm;
