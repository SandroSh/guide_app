import { Swiper, SwiperSlide } from "swiper/react"
import { hotelCards, sectionHeaders } from "../Data"
import SectionHeader from "./SectionHeader"
import { Pagination } from "swiper/modules"
import '../../node_modules/swiper/swiper-bundle.css'
import '../../node_modules/swiper/swiper-bundle.css';
import HotelCard from "./HotelCard"
import { useState } from "react"





const Hotels = () => {

    const [slides, setSlides] = useState(hotelCards);

    const handleSlideChange = (swiper: any) => {
        const firstIndex = swiper.realIndex; 

        const updatedSlides = slides.map((slide, index) => ({
            ...slide,
            isFirst: index === firstIndex
        }));
        
        setSlides(updatedSlides);
    }
    return (
        <div className="mt-[142px]  flex flex-col justify-center items-center">
            <SectionHeader data={sectionHeaders[2]} />
            <div className="max-w-[1300px] w-full flex flex-col items-center justify-center mt-[50px]" >
                <Swiper
                    slidesPerView={3} 
                    spaceBetween={100}  
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet">${index + 1}</span>`;
                        }
                    }}
                    modules={[Pagination]}
                    onSlideChange={handleSlideChange}
                    className="mySwiper mySwiper2"
                >
                    {
                        slides.map((item, i) => <SwiperSlide key={i} ><HotelCard data={item}  /></SwiperSlide> )
                    }
                </Swiper>

                {/* Custom pagination container */}
                <div className="custom-pagination self-start"></div>
            </div>
        </div>
    )
}

export default Hotels