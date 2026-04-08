import { Routes, Route } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './components/LoginPage'
import shortenUrlPage from './components/shortenUrlPage'
import DashboardLayout from './components/Dashboard/dashboardlayout'

const AppRouter = () => {
  return (
    <>
        <Navbar />
            <Toaster position='bottom-center'/> 
                <Routes>
                    <Route path='/' element={< Landingpage />}/>
                    <Route path='/about' element={< AboutPage/>}/>
                    <Route path='/register' element={< RegisterPage/>}/>
                    <Route path='/login' element={< LoginPage/>}/>
                    <Route path='/dashboard' element={ < DashboardLayout/>}/>
                </Routes>
        <Footer />
    </>
  )
}

export default AppRouter

export const SubDomainRouter = () => {
    return (
        <Routes>
            <Route path='/:url' element={< shortenUrlPage/>} />
        </Routes>
    )
}