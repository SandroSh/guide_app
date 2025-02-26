
import { sectionHeaderType } from '../Data'

const SectionHeader = ({data}: {data:sectionHeaderType}) => {
  return (
    <div className=' w-full max-w-[1300px] flex flex-col justify-center items-start'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-darkBlue font-[900] font-eurostile text-5xl'>{data.title}</h1>
            <span className='text-gray-300 font-[900] text-7xl'>{data.numeration}</span>
        </div>
        <p className='mt-[17px] text-gray-300 text-[19px] max-w-[70%] '>{data.description}</p>
    </div>
  )
}

export default SectionHeader