import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MeetTheTeam from './pages/MeetTheTeam'
import OurServices from './pages/OurServices'
import Gallery from './pages/Gallery'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
