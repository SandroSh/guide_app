import HomeImg from '../../public/assets/homeImg.png'
import { homeCard, homeCards } from '../Data'
import HomeCard from './HomeCard'
const Home = () => {
  return (
    <div className='w-full'>
      <div className="w-full  mt-[130px] flex items-center justify-center">
        <div className='flex flex-col mr-[-50px]'>
          <div className="z-10 max-w-[400px]">
            <h1 className="text-[50px] font-[900] text-gray-900 whitespace-nowrap">
              რაჭა ჩვენი სიყვარულია
            </h1>
            <p className="text-gray-700 mt-3 text-sm md:text-base whitespace-nowrap" >
              ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს,<br/> სერვისებსა და ღირსშესანიშნაობებს.
            </p>
          </div>
          {/* Dark Mode */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-800 font-medium">DARK MODE</span>

            <div className="w-14 h-7 flex items-center bg-gray-400 rounded-full p-1">
              <div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-0"></div>
            </div>
          </div>
        </div>
        <div className='relative right-[5%]'>
          <img src={HomeImg} className="w-full max-w-[1200px] h-max max-h-[500px] object-cover" alt="Toursim image" />
          <p className='rotate-90 absolute right-[-20%] bottom-[10%] text-darkBlue'>Racha with love 2022</p>
        </div>
      </div>

      <div className=' w-full flex justify-around px-[120px] items-center mt-[75px]'>
          {
            homeCards.map((item:homeCard, i) => <HomeCard data={item} key={i} />)
          }
      </div>
    </div>
  )
}

export default Home