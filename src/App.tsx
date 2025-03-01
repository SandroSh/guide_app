import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import OurTeam from './Pages/OurTeam'
import News from './Pages/News'
import Contact from './Pages/Contact'
import MainPage from './Pages/MainPage'
import Footer from './Components/Footer'
import ServicePage from './Pages/ServicePage'
import { useState } from 'react'


const App = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState<boolean>(false);
  const handleRegistration = () => {
    setIsRegistrationOpen((prev) => !prev);
    console.log(isRegistrationOpen)
  }
  return (
    <>
      <div className='flex justify-center w-full'>
        <Navbar handleRegistrationClick={handleRegistration} />
      </div>
      <Routes>
        <Route path="/" element={<MainPage isRegistrationOpen={isRegistrationOpen} />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App