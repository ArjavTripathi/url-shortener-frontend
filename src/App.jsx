import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'

import { getApps } from './utils/helper'

function App() {
  
  const CurrrentApp = getApps()

  return (
    <>
      <Router>
      <CurrrentApp />
      </Router>
    </>
  )
}

export default App
