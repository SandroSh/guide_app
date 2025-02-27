import FLogo from '../../public/assets/facebook-svgrepo-com.svg'
import ILogo from '../../public/assets/instagram-svgrepo-com (2).svg'
import YLogo from '../../public/assets/youtube-svgrepo-com.svg'

const Footer = () => {
    return (
        <div className='w-full max-w-[100vw] bg-primaryBlue flex justify-center pt-[58px] pb-[58px]'>
            <div className="max-w-[1300px] w-full flex items-center justify-between " >
                <p className='font-bold text-white' >Racha with love All rights reserved Copyrights 2022</p>
                <div className='flex justify-between items-center'>
                    <img src={FLogo} className='w-[30px]' alt="Facebook logo" />
                    <img src={ILogo} className='w-[30px] mx-[50px]' alt="Instagram logo" />
                    <img src={YLogo} className='w-[30px]' alt="Youtube logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer