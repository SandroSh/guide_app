import { Swiper, SwiperSlide } from "swiper/react"
import { hotelCards, sectionHeaderType } from "../../Data"
import SectionHeader from "../SectionHeader"
import { Autoplay, Pagination } from "swiper/modules"
import '../../../node_modules/swiper/swiper-bundle.css'

import HotelCard from "./HotelCard"
import { useState } from "react"





const Hotels = ({ sectionHeaderData, marginBottom, id }: { sectionHeaderData: sectionHeaderType, marginBottom: string, id:number }) => {

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
        <div className={`mt-[142px] ${marginBottom} flex flex-col justify-center items-center`}>
            <SectionHeader data={sectionHeaderData} />
            <div className="max-w-[1300px] w-full flex flex-col items-center justify-center mt-[50px]" >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={100}
                    pagination={{
                        el: `.custom-pagination-${id}`,
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet">${index + 1}</span>`;
                        }
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    onSlideChange={handleSlideChange}
                    className={`mySwiper mySwiper2`}
                >
                    {
                        slides.map((item, i) => <SwiperSlide key={i} ><HotelCard data={item} /></SwiperSlide>)
                    }
                </Swiper>
                <div className={`custom-pagination self-start custom-pagination-${id}`}></div>
                {/* Custom pagination container */}
            </div>
        </div>
    )
}

export default Hotels