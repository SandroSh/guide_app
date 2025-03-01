import StartingHeader from "../Components/StartingHeader"
import FLogo from '../../public/assets/facebook-blue.svg'
import ILogo from '../../public/assets/Instagram-blue.svg'
import MobileLogo from '../../public/assets/mobile-blue.svg'
import LocationLogo from '../../public/assets/location-blue.svg'





const Contact = () => {
  return (
    <div className='w-full max-w-[1300px] mx-auto min-h-screen mt-[130px] mb-[140px]'>
      <StartingHeader title={'კონტაქტი'} />
      <div className="pt-[100px]">
        <h1 className="font-bold text-primaryBlue text-2xl">რუკა</h1>
        <iframe
          width="100%"
          height="500"
          loading="lazy"
          className="rounded-2xl pt-[20px]"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991323246!2d-74.2598759342869!3d40.69767006385262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5b923ef1d%3A0x3dbe6e9a418d34e2!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sus!4v1617210212210!5m2!1sen!2sus"
        ></iframe>
      </div>
      <div className="flex flex-col items-start justify-start" >
        <div className="w-full flex justify-between items-center mt-[78px]">
          <h1 className="font-bold text-3xl text-primaryBlue" >rachawithlove@gmail.com</h1>
          <div className="flex justify-center items-center">
            <img src={FLogo} className='w-[40px] mr-[30px]' alt="Facebook logo" />
            <img src={ILogo} className='w-[40px]' alt="Instagram logo" />
          </div>
        </div>
        <div className="flex justify-start items-center mt-[45px] gap-[60px]">
          <div className="flex justify-center items-center gap-[18px]">
            <img src={MobileLogo} alt="mobile logo" />
            <p className="font-bold font-montserrat text-primaryBlue">599 99 99 99</p>
          </div >
          <div className="flex justify-center items-center gap-[18px]" >
            <img src={LocationLogo} alt="location logo" />
            <p className="font-bold font-montserrat text-primaryBlue">რაჭა ონი</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact