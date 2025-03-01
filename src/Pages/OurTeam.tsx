import { teamMembers } from '../Data'
import StartingHeader from '../Components/StartingHeader'
import TeamMemberCard from '../Components/TeamPage/TeamMemberCard'





const OurTeam = () => {
  return (
    <div className='w-full max-w-[1300px] mx-auto min-h-screen mt-[130px] mb-[210px]'>
      <StartingHeader title='ჩვენი გუნდი' />
      <p className='pt-[88px] max-w-[75%] font-montserrat text-2xl '>სტარტაპის შექმნის იდეა ონის სკოლის 4 მოსწავლეს ეკუთვნის, რომელთა მიზანიც რეგიონალური ტურიზმის განვითარების ხელშეწყობა და რეგიონალურ მდგრად განვითარებაში მონაწილეობის მიღებაა.</p>
      <div className='flex gap-[92px] pt-[30px]' >
        {
          teamMembers.map((item, i) => <TeamMemberCard data={item} key={i} />)
        }
      </div>
    </div>

  )
}

export default OurTeam