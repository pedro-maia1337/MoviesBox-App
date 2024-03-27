import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className="app-container">
        <NavBar/>
        <Outlet />
      </div>
    </>
  )
}

export default App
