import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

import OurTeam from './Components/TeamPage/OurTeam'
import News from './Components/News'
import Contact from './Components/Contact'
import MainPage from './Components/MainPage/MainPage'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <div className='flex justify-center w-full'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App