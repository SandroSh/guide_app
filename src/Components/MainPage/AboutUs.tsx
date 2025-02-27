import { sectionHeaders } from "../../Data"
import SectionHeader from "../SectionHeader"
import AboutUsImg from '../../../public/assets/about-us-img.png'


const AboutUs = () => {
  return (
    <div className="mt-[92px]  flex flex-col justify-center items-center">
      <SectionHeader data={sectionHeaders[0]} />
      <div className='max-w-[1300px] w-full flex items-center justify-center mt-[50px]'>
        <img src={AboutUsImg} alt="working team" />
        <div className="flex items-center justify-between relative mt-[50px]">
          <div className="w-[300px] h-[240px] absolute left-[-12%] bg-primaryRed rounded-[19px] "></div>
          <p className="z-10 font-bold text-primaryBlue mr-[-10px]">Racha with Love დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და დაუვიწყარი თავგადასავლის მონაწილე გახდე. ვენთან ერთად შეძლებ დაჯავშნო სასტუმროები, დაგეგმო ტურები და შეიძინო ადგილობრივი მეწარმეების მიერ დამზადებული ნივთები. ამ ყველაფერს მხოლოდ ერთი პლათფორმის საშუალებით ერთ სივრცეში შეძლებთ.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs