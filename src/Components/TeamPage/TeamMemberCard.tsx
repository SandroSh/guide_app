import { TeamMemType } from '../../Data'





const TeamMemberCard = ({data}: {data:TeamMemType}) => {
    return (
        <div className="flex flex-col">
            <img src={data.url} className='rounded-2xl' alt="Team img" />
            <h1 className='font-bold text-[1.4rem] text-primaryBlue mt-[30px]'>{data.name}</h1>
            <h2 className='font-bold text-gray-300 mt-[10px]'>{data.position}</h2>
        </div>
    )
}

export default TeamMemberCard