import { Hero, Radial, Man, Cube } from '@/assets';
const Home = () => {
  return (
    <div className='container px-5 mx-auto lg:pt-32 md:pt-16 pt-5'>
      {/* Hero Section */}
      <div className="grid lg:grid-rows-5 grid-rows-1 grid-cols-1 md:grid-cols-2 md:gap-x-10">
        <div className="col-span-1 relative lg:row-span-3 row-span-1 text-center grid place-content-end md:text-right lg:place-items-end">
          {/* <img src={Radial} className='absolute w-[7rem] left-40 top-14'></img> */}
          <h3 className='lg:text-5xl md:text-4xl text-2xl font-bold text-white'>Welcome to Daedalus</h3>
          <p className='lg:my-5 md:my-3 my-2  lg:text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus molestiae sit modi ut at velit, voluptatibus illum sequi aut aperiam dolore fugit beatae asperiores earum adipisci laboriosam eum enim.</p>
        </div>
        <div className="col-span-1 lg:row-span-5 md:row-span-3 row-span-1 grid justify-items-center">
          <img src={Hero} alt="" className='lg:max-w-full md:w-full max-w-xs'/>
        </div>
        <button className="btn mt-5 md:mt-0 row-span-1 lg:w-3/12 lg:ms-auto bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] lg:px-12 hover:bg-[#ffffff2c] hover:outline hover:text-white">Register</button>
      </div>

      {/* Announcement Section */}
      <div className='container-full relative grid md:grid-cols-4 grid-cols-1 lg:gap-10 md:gap-5 lg:mt-72 md:mt-20 mt-10 rounded-[25px] outline bg-[#2020537e] md:p-10 p-5'>
        <div className='lg:relative md:static static lg:col-span-1 md:col-span-2 grid place-items-center justify-items-center'>
          <img src={Man} alt="image" className=' lg:absolute lg:max-w-full md:max-w-full max-w-[15rem] bottom-3 z-10' />
        </div>
        <div className='lg:col-span-3 md:col-span-2 grid md:text-start text-center'>
          <h1 className='font-bold md:mt-0 mt-3 lg:text-5xl md:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 mb-3'>HAPPENING NOW!</h1>
          <h2 className='font-bold italic md:text-2xl text-xl text-white mb-3'>Hackathon Season 2</h2>
          <p className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quo impedit autem nam, doloremque unde, itaque labore expedita fugiat distinctio iusto iure commodi, obcaecati illum dolore dicta aspernatur eos sint.</p>
          <button className="btn lg:mt-5 md:mt-4 mt-3 row-span-1 lg:w-3/12 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] lg:px-12 hover:bg-[#ffffff2c] hover:outline hover:text-white">Explore</button>
          <img src={Cube} alt='cube' className='lg:absolute z-10 top-[-3rem] right-[-2rem] lg:max-w-[10rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
