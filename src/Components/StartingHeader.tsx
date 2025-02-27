import MainImg from '../../public/assets/swiper-2.png'
import Vtext from '../../public/assets/v-icon.svg'


const StartingHeader = () => {
  return (
  
    <div className="flex justify-between">
      {/* right container */}
      <div className='flex max-w-[250px] justify-center flex-col relative'>
        <div className="z-10">
          <h1 className="text-[65px] font-[900] text-gray-900 whitespace-nowrap">
            ჩვენი გუნდი
          </h1>
        </div>

        <div className="flex items-center mt-auto absolute bottom-0">
          <span className="text-gray-800 font-medium">DARK MODE</span>
          <div className="w-14 h-7 flex items-center bg-gray-400 rounded-full p-1 ml-[10px]">
            <div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-0"></div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-[60px]'>
        <img src={MainImg} className='w-[65vw] h-[400px]' alt="homeImg" />
        <img src={Vtext} className='self-end mr-5' alt="homeImg" />
      </div>

    </div>


  )
}

export default StartingHeader