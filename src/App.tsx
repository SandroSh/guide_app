import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import OurTeam from './Components/OurTeam'
import News from './Components/News'
import Contact from './Components/Contact'
import MainPage from './Components/MainPage'


const App = () => {
  return (
    <>
      <div className='flex justify-center w-full'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App