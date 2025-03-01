import { sectionHeaders } from "../Data"
import Hotels from "../Components/MainPage/Hotels"
import StartingHeader from "../Components/StartingHeader"






const ServicePage = () => {
    return (
        <div className='w-full max-w-[1300px] mx-auto min-h-screen mt-[130px] mb-[140px]' >
            <StartingHeader title="სერვისები" />
            <p className="max-w-[75%] font-montserrat text-2xl mt-[92px] mb-[100px] text-gray-300" ><span className="font-extrabold" >Racha with Love</span> დაგეხმარება დაგეგმო შენი მოგზაურობა რაჭაში და დაუვიწყარი თავგადასავლის მონაწილე გახდე. ჩვენთან ერთად შეძლებ დაჯავშნო სასტუმროები, დაგეგმო ტურები და შეიძინო ადგილობრივი მეწარმეების მიერ დამზადებული ნივთები. ამ ყველაფერს მხოლოდ ერთი პლათფორმის საშუალებით ერთ სივრცეში შეძლებთ.</p>
            <Hotels sectionHeaderData={sectionHeaders[3]} marginBottom="140" id={3}/>
            <Hotels sectionHeaderData={sectionHeaders[4]} marginBottom="140" id={4}/>
            <Hotels sectionHeaderData={sectionHeaders[5]} marginBottom="180" id={5}/>
        </div>
    )
}

export default ServicePage