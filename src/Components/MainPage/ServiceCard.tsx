import { serviceCardType } from "../Data"

const ServiceCard = ({data}:{data:serviceCardType}) => {
  return (
    <div className={`flex justify-between items-center pt-[42px] pb-[42px]  border-gray-400  ${data.isLast?'border-t-2 border-b-2' : ' border-t-2'}`}>
        <div className="flex items-center">
            <img src={data.iconUrl} alt="icon" />
            <h2 className={`font-bold ${data.color} ml-[25px]`}>{data.title}</h2>
        </div>
        <img src={data.arrowIconUrl} alt="icon" />
    </div>
  )
}

export default ServiceCard