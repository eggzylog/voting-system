import { Vote } from '@/assets'

const Home = () => {
  return (
    <div className="container mx-auto px-5 pt-5 md:pt-16 lg:pt-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 grid-rows-1 align-middle md:grid-cols-2 md:gap-x-10 lg:grid-rows-4">
        <div className="relative col-span-1 row-span-1 grid place-content-end text-center md:text-left lg:row-span-3 lg:place-items-end">
          {/* <img src={Radial} className='absolute w-[7rem] left-40 top-14'></img> */}
          <h3 className="mx-auto bg-gradient-to-r  from-cyan-300 via-purple-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-6xl">
            DaedaVote
          </h3>
          <ul className="my-2 flex flex-col  gap-1 text-justify md:my-3 md:text-xl lg:my-5 lg:text-2xl">
            <li>
              <span className="font-bold">W</span>elcome to our hackathon voting
              system! We are a dedicated team passionate about fostering
              innovation, collaboration, and creativity in the hackathon
              community.
            </li>
            <br />
            <li>
              At our core, we believe that hackathons are the breeding ground
              for groundbreaking ideas and solutions. Our mission is to provide
              a fair and transparent voting system that empowers participants to
              showcase their talent and receive recognition.
            </li>
            <br />
            <li>
              With our user-friendly platform and robust features, we aim to
              streamline the voting process and make it accessible to all
              participants. We prioritize inclusivity and diversity, ensuring
              that all voices are heard and valued.
            </li>
            <br />
            <li>
              Our team consists of experienced developers who understand the
              unique challenges of hackathons. We work closely with organizers
              to design and implement a customizable voting system that aligns
              with the specific requirements of each event.
            </li>
            <br />
            <li>
              Whether you're a participant, organizer, or sponsor, our hackathon
              voting system provides an efficient and reliable way to evaluate
              projects, celebrate innovation, and award deserving teams. Join us
              in revolutionizing the hackathon experience!
            </li>
          </ul>
        </div>
        <div className="col-span-1 row-span-1 grid place-content-center justify-items-center md:row-span-3 lg:row-span-5">
          <img
            src={Vote}
            alt="hero"
            className="max-w-xs md:w-full lg:max-w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
