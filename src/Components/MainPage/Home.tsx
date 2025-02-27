import SwiperImg1 from '../../../public/assets/swiper-1.png'
import SwiperImg2 from '../../../public/assets/swiper-2.png'
import SwiperImg3 from '../../../public/assets/swiper-3.png'
import SwiperImg4 from '../../../public/assets/swiper-4.png'
import { homeCard, homeCards } from '../../Data'

import HomeCard from './HomeCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import '../../../node_modules/swiper/swiper-bundle.css'

const Home = () => {
  return (
    <div className='w-full max-w-[1300px] mx-auto mt-[130px]'>
      <div className="flex justify-between">
        {/* right container */}
        <div className='flex max-w-[300px] justify-center flex-col relative'>
          <div className="z-10">
            <h1 className="text-[65px] font-[900] text-gray-900 whitespace-nowrap">
              რაჭა ჩვენი სიყვარულია
            </h1>
            <p className="text-gray-700 mt-3 text-sm md:text-base whitespace-nowrap" >
              ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს,<br /> სერვისებსა და ღირსშესანიშნაობებს.
            </p>
          </div>

          {/* color switcher */}
          <div className="flex items-center mt-auto absolute bottom-0">
            <span className="text-gray-800 font-medium">DARK MODE</span>
            <div className="w-14 h-7 flex items-center bg-gray-400 rounded-full p-1 ml-[10px]">
              <div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-0"></div>
            </div>
          </div>
        </div>
        {/* Swiper Start */}
        <div className='max-w-[900px] '>
          <Swiper navigation={true} modules={[Navigation, Autoplay]}  autoplay={{delay:3000, disableOnInteraction:false}} className="mySwiper rounded-2xl" >
            <SwiperSlide><img src={SwiperImg1} className='' alt="homeImg" /></SwiperSlide>
            <SwiperSlide><img src={SwiperImg2} className='' alt="homeImg" /></SwiperSlide>
            <SwiperSlide><img src={SwiperImg3} className='' alt="homeImg" /></SwiperSlide>
            <SwiperSlide><img src={SwiperImg4} className='' alt="homeImg" /></SwiperSlide>
          </Swiper>
        </div>
        {/* Swiper End */}
        <div className='self-end mb-[65px]'>
          <p className='rotate-90 text-darkBlue self-end justify-self-end w-max'>Racha with love 2022</p>
        </div>

      </div>
      <div className='flex justify-between items-center mt-[75px]'>
        {
          homeCards.map((item: homeCard, i) => <HomeCard data={item} key={i} />)
        }
      </div>

    </div>

  )
}

export default Home