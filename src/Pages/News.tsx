import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.css'
import StartingHeader from '../Components/StartingHeader'
import { Autoplay, Pagination } from 'swiper/modules';
import NewsCard from '../Components/NewsPage/NewsCard';

const News = () => {
  return (
    <div className='w-full max-w-[1300px] mx-auto min-h-screen mt-[130px] mb-[210px]'>
      <StartingHeader title={'სიახლეები'} />
      <p className='pt-[88px] max-w-[75%] font-montserrat text-2xl '>სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად განვითარებაში მონაწილეობის მიღებაა.</p>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet">${index + 1}</span>`;
          }
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mySwiper2 mt-[85px]"
      >
        {
          [...Array(5)].map((_, i) => <SwiperSlide key={i} ><NewsCard/></SwiperSlide>)
        }
      </Swiper>

      {/* Custom pagination container */}
      <div className="custom-pagination self-start"></div>
    </div>
  )
}

export default News