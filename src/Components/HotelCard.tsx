import { hotelCardType } from "../Data"
import BlueIcon from '../../public/assets/goto_blue.svg'
import RedIcon from '../../public/assets/goto_red.svg'
import NotFilledSIcon from '../../public/assets/star2.svg'
import FilledSIcon from '../../public/assets/star1.svg'
const HotelCard = ({ data }: { data: hotelCardType }) => {



    return (
        <div className='flex flex-col border-b-2 border-gray-200 cursor-pointer'>
            <div className="image-container">
                <img src={data.imgUrl} className={`${data.isFirst ? 'hotel-img' : ''}`} alt="hotel photo" />
            </div>
            <div className="flex items-center justify-between mt-[10px]">
                <h1 className={`font-extrabold text-2xl  ${data.isFirst ? 'text-primaryRed' : 'text-primaryBlue'}`}>{data.title}</h1>
                <img src={!data.isFirst ? BlueIcon : RedIcon} alt="go to icon" />
            </div>
            <p className="text-gray-500 font-poppins mt-[10px]">{data.description}</p>
            <div className="flex items-center mt-[18px] mb-[18px]">
                {
                    [...Array(data.starNum)].map((_, i) => (
                        <img src={FilledSIcon} key={i} className="w-[15px] mr-[10px]"  alt="star" />
                    ))
                }
                {
                    [...Array(5 - data.starNum)].map((_, i) => (
                        <img src={NotFilledSIcon} key={i} className="w-[15px] mr-[10px]" alt="star" />
                    ))
                }
            </div>
        </div>
    )
}

export default HotelCard