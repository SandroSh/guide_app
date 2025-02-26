import { sectionHeaders, serviceCardData } from "../Data"
import SectionHeader from "./SectionHeader"
import ServicesImg from '../../public/assets/services-img.png'
import ServiceCard from "./ServiceCard"
const Services = () => {
  return (
    <div className="mt-[120px] flex flex-col justify-center items-center">
      <SectionHeader data={sectionHeaders[1]} />
      <div className='max-w-[1300px] w-full flex items-center justify-between mt-[55px] gap-[110px]'>
        <div className="w-full h-auto flex flex-col">
            {
              serviceCardData.map((item, i) => <ServiceCard data={item} key={i}/>)
            }
        </div>
        <img src={ServicesImg} alt="services img" />
      </div>
    </div>
  )
}

export default Services