import './App.css'
import Login from './Component/Login'
import Calendarapp from './Component/Calendar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/calendar' element={<Calendarapp/>}/>
        </Routes>
      </Router>
        
    </div>
  );
}

export default App
