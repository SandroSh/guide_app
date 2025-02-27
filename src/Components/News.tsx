import { Pagination } from 'swiper/modules'
import MainImg from '../../public/assets/swiper-2.png'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../../node_modules/swiper/swiper-bundle.css'
const News = () => {
  return (
    <div>
      <div className='w-full max-w-[1300px] mx-auto mt-[130px]'>
        <div className="flex items-center justify-between">
          {/* right container */}
          <div className='flex max-w-[300px] flex-col'>
            <div className="z-10">
              <h1 className="text-[55px] font-[900] text-gray-900 whitespace-nowrap">
                სიახლეები
              </h1>
            </div>

            {/* color switcher */}
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">DARK MODE</span>
              <div className="w-14 h-7 flex items-center bg-gray-400 rounded-full p-1">
                <div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-0"></div>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <img src={MainImg} className='max-h-[500px]' alt="main image" />
            <div className='self-end mb-[65px]'>
              <p className='rotate-90 text-darkBlue self-end justify-self-end w-max'>Racha with love 2022</p>
            </div>
          </div>
        </div>
       <Swiper>

       </Swiper>

        <div className="custom-pagination self-start"></div>
      </div>
      <Footer />
    </div>
  )
}

export default News