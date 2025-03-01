import AboutUs from '../Components/MainPage/AboutUs'
import Home from '../Components/MainPage/Home'
import Hotels from '../Components/MainPage/Hotels'
import Services from '../Components/MainPage/Services'
import { sectionHeaders } from '../Data'
import Registration from '../Components/Registration'

const MainPage = ({isRegistrationOpen}: {isRegistrationOpen:boolean}) => {
  console.log(isRegistrationOpen)
  return (
    <>
      {isRegistrationOpen ? <Registration/> : <Home /> }
      <AboutUs />
      <Services />
      <Hotels sectionHeaderData={sectionHeaders[0]}  marginBottom='mb-[210px]' id={1} />
    </>
  )
}

export default MainPage