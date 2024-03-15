import Home from './pages/Home'
import "./main"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BookService from './components/BookService'
import AppointmentDate from './components/AppointmentDate'
import Menu from './components/menu'
import Deposit from './components/Deposit'
function App() {
  

  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
          <Route  
            path='/book'
            element={<BookService/>}
          />
          <Route
            path='/date'
            element={<AppointmentDate/>}
          />

          <Route
            path='/deposit'
            element={<Deposit/>}
          />

          <Route
            path='/menu'
            element={<Menu/>}
          />

          

          

          
        
           
         
        </Routes>
      </BrowserRouter>

     
  )
}

export default App