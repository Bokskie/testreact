import RootLayout from './shared/components/Layout/RootLayout'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenClothing from './pages/MenClothing'

const App = () => {
  
  return(
       
        <RootLayout>
          <Routes>
            <Route path='/' element={<HomePage />}>Home</Route>
            <Route path='about' element={<AboutPage />}>About</Route>
            <Route path='MenClothing' element={<MenClothing />}>About</Route>
          </Routes>
        </RootLayout>
      
      
  )
  
}

export default App
