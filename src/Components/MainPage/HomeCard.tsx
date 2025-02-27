import { homeCard } from '../../Data'
import GoToBlueIcon from '../../../public/assets/goto_blue.svg'
import GoToRedIcon from '../../../public/assets/goto_red.svg'
const HomeCard = ({ data }: { data: homeCard }) => {
    return (

        <div className=' max-w-[300px]'>
            <div className='flex flex-col items-start justify-around'>
                <div className='flex justify-start items-center'>
                    <img src={data.imgUrl} alt=" title icon" />
                    <h1 className={data.isActive ? 'font-[700] text-primaryRed ml-[19px]' : 'font-[700] ml-[19px]'}>{data.title}</h1>
                </div>
                <div className='flex justify-center items-center mt-[21px]'>
                    <h2 className={data.isActive ? 'font-[700] text-primaryRed' : 'font-[700]'}>{data.linkTitle}</h2>
                    <img src={data.isActive ? GoToRedIcon : GoToBlueIcon} className='ml-[15px]' alt="go to icon" />
                </div>
            </div>
        </div>
    )
}

export default HomeCard