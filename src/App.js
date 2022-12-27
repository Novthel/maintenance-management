import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardManager from './pages/DashboardManager';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/dashboard-manager' element={ <DashboardManager /> } />
      </Routes>
  
    </>
  );
}

export default App;
