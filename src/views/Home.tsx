import { Hero, Radial, Man, Cube } from '@/assets'
const Home = () => {
  return (
    <div className="container mx-auto px-5 pt-5 md:pt-16 lg:pt-32">
      {/* Hero Section */}
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:gap-x-10 lg:grid-rows-5">
        <div className="relative col-span-1 row-span-1 grid place-content-end text-center md:text-right lg:row-span-3 lg:place-items-end">
          {/* <img src={Radial} className='absolute w-[7rem] left-40 top-14'></img> */}
          <h3 className='lg:text-6xl md:text-4xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500'>
            DAEDALUS' HACKATHON
          </h3>
          <p className="my-2 md:my-3 lg:my-5  lg:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            delectus molestiae sit modi ut at velit, voluptatibus illum sequi
            aut aperiam dolore fugit beatae asperiores earum adipisci laboriosam
            eum enim.
          </p>
        </div>
        <div className="col-span-1 row-span-1 grid justify-items-center md:row-span-3 lg:row-span-5">
          <img src={Hero} alt="" className="max-w-xs md:w-full lg:max-w-full" />
        </div>
        <button className="btn row-span-1 mt-5 bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-0 lg:ms-auto lg:w-3/12 lg:px-12">
          Register
        </button>
      </div>

      {/* Announcement Section */}
      <div className="container-full relative mt-10 grid grid-cols-1 rounded-[25px] bg-[#2020537e] p-5 outline md:mt-20 md:grid-cols-4 md:gap-5 md:p-10 lg:mt-72 lg:gap-10">
        <div className="static grid place-items-center justify-items-center md:static md:col-span-2 lg:relative lg:col-span-1">
          <img
            src={Man}
            alt="image"
            className=" bottom-3 z-10 max-w-[15rem] md:max-w-full lg:absolute lg:max-w-full"
          />
        </div>

        <div className="lg:col-span-3 md:col-span-2 grid md:text-start text-center">
          <h1 className="font-bold md:mt-0 mt-3 lg:text-5xl md:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 mb-3">
            HAPPENING NOW!
          </h1>
          <h2 className="mb-3 text-xl font-bold italic text-white md:text-2xl">
            Hackathon Season 2
          </h2>
          <p className="md:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            quo impedit autem nam, doloremque unde, itaque labore expedita
            fugiat distinctio iusto iure commodi, obcaecati illum dolore dicta
            aspernatur eos sint.
          </p>
          <button className="btn row-span-1 mt-3 w-full bg-gradient-to-r from-cyan-300 via-purple-500 to-blue-500 text-[#11113A] hover:bg-[#ffffff2c] hover:text-white hover:outline md:mt-4 lg:mt-5 lg:w-3/12 lg:px-12">
            Explore
          </button>
          <img src={Cube}
            alt='cube'
            className='lg:absolute md:absolute z-10 top-[-3rem] lg:right-[-2rem] md:right-0 lg:max-w-[10rem] md:max-w-[7rem] max-w-0' />
        </div>
      </div>
    </div>
  )
}

export default Home
