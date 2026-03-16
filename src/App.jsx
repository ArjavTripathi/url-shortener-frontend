import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={< Landingpage />}/>
          <Route path='/about' element={< AboutPage/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
