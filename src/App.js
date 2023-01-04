import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashboardManager from './pages/DashboardManager';
import DashboardManagerCreate from './pages/DashboardManagerCreate';
import DashboardManagerActivityList from './pages/DashboardManagerActivityList';
import DashboardManagerOrderDetail from './pages/DashboardManagerOrderDetail';
import DashboardManagerNotification from './pages/DashboardManagerNotification';
import DashboardManagerNotificationDetail from './pages/DashboardManagerNotificationDetail';
import DashboardManagerHelp from './pages/DashboardManagerHelp';
import DashboardManagerStore from './pages/DashboardManagerStore';
import DashboardManagerEmployees from './pages/DashboardManagerEmployees';
import DashboardManagerEmployeeData from './pages/DashboardManagerEmployeeData';
import { AppContext } from './context/UserProvider';
import { useContext } from 'react';
import Notification from './pages/Notification';
import Register from './pages/Register';



function App() {

  const { userSession } = useContext( AppContext );
  console.log(userSession)

  return (
    <>
      <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/notification' element={ <Notification /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/dashboard-manager' element={ <DashboardManager /> } />
        <Route path='/dashboard-manager/activity-List' element={ <DashboardManagerActivityList /> } />
        <Route path='/dashboard-manager/activity-List/:code' element={ <DashboardManagerOrderDetail /> } />
        <Route path='/dashboard-manager/create-Activity/:code' element={ <DashboardManagerCreate /> } />
        <Route path='/dashboard-manager/notification' element={ <DashboardManagerNotification /> } />
        <Route path='/dashboard-manager/notification/:id' element={ <DashboardManagerNotificationDetail /> } />
        <Route path='/dashboard-manager/help' element={ <DashboardManagerHelp /> } />
        <Route path='/dashboard-manager/store' element={ <DashboardManagerStore /> } />
        <Route path='/dashboard-manager/employees' element={ <DashboardManagerEmployees /> } />
        <Route path='/dashboard-manager/employees/:code' element={ <DashboardManagerEmployeeData /> } />

      </Routes>
  
    </>
  );
}

export default App;
