import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={< Landingpage />}/>
          <Route path='/about' element={< AboutPage/>}/>
          <Route path='/register' element={< RegisterPage/>}/>
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
