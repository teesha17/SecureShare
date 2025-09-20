import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
