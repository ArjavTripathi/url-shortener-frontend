import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landingpage from './components/Landingpage'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Landingpage />}/>
        <Route path='/about' element={< AboutPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
