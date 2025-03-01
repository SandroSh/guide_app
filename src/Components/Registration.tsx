import MainImg from '../../public/assets/swiper-2.png'
import Vtext from '../../public/assets/v-icon.svg'
import ThemeSwitcher from './ThemeSwitcher'

const Registration = () => {
    return (
        <div className='w-full max-w-[1300px] mx-auto mt-[130px]'>
            <div className="flex justify-between">
                <div className='flex  justify-center flex-col relative'>
                    <div className="flex items-center mt-auto absolute bottom-0">
                        <span className="text-gray-800 font-medium ">DARK MODE</span>
                        <div className="w-14 h-7 flex items-center bg-gray-400 rounded-full p-1 ml-[10px]">
                            <div className="w-5 h-5 bg-white rounded-full shadow-md translate-x-0"></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center gap-[60px] max-w-[1000px] w-full h-[450px]'>
                    <div className='w-full h-full rounded-2xl background-div flex flex-col '>
                        <h1 className='text-primaryRed font-extrabold text-3xl'>რეგისტრაცია</h1>
                        <div>
                            <input type="text" placeholder='სახელი' />
                            <input type="text" placeholder='' />
                            <input type="text" placeholder='' />
                        </div>
                    </div>
                    <img src={Vtext} className='self-end mr-5' alt="homeImg" />
                </div>

            </div>
        </div>
    )
}

export default Registration