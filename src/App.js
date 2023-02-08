import './App.scss'
import { useContext } from 'react';
import { AppContext } from './context/UserProvider';
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
import Notification from './pages/Notification';
import Register from './pages/Register';
import DashboardManagerActivity from './pages/DashboardManagerActivity';
import { RequireAuth } from './auth/RequireAuth';
import Error from './pages/Error';
import DashboardManagerHelpList from './pages/DashboardManagerHelpList';


function App() {

  const { role, username } = useContext( AppContext );
  
  return (
    <>
      <Routes>

        <Route path='/' element={ <Home /> } />

        {/* <Route path='/notification' element={ 
          <RequireAuth isAllowed={ !!username && role === 'operator' }  > 
            <Notification />
          </RequireAuth> 
        } />   */}
        <Route path='/notification' element={ <Notification /> } />
      
        {/* <Route path='/dashboard-manager' element={ 
          <RequireAuth isAllowed={ !!username && role !== 'operator'}  redirectTo='/notification' > 
            <DashboardManager />
          </RequireAuth> 
        } />   */}
        <Route path='/dashboard-manager' element={ <DashboardManager /> } />


          <Route path='/dashboard-manager/activity-List' element={ <DashboardManagerActivityList /> } />
          <Route path='/dashboard-manager/Activity/:ordernumber' element={ <DashboardManagerActivity /> } />
          <Route path='/dashboard-manager/notification' element={ <DashboardManagerNotificationDetail /> } />
          <Route path='/dashboard-manager/help' element={ <DashboardManagerHelp /> } />
          <Route path='/dashboard-manager/help/:id' element={ <DashboardManagerHelp /> } />
          <Route path='/dashboard-manager/help-List' element={ <DashboardManagerHelpList /> } />
          <Route path='/error' element={ <Error /> } />
        
   
        {/* <Route element={ <RequireAuth isAllowed={ !!username && role !== 'technician' && role !== 'operator' } 
          redirectTo='/dashboard-manager'/> }> */}
          
          <Route path='/dashboard-manager/activity-List/:ordernumber' element={ <DashboardManagerOrderDetail /> } />
          <Route path='/dashboard-manager/notification-List' element={ <DashboardManagerNotification /> } />
          <Route path='/dashboard-manager/notification/:id' element={ <DashboardManagerNotificationDetail /> } />
          <Route path='/dashboard-manager/create-Activity' element={ <DashboardManagerCreate /> } />
          <Route path='/dashboard-manager/store' element={ <DashboardManagerStore /> } />
          <Route path='/dashboard-manager/employees' element={ <DashboardManagerEmployees /> } />
          <Route path='/dashboard-manager/employees/:id' element={ <DashboardManagerEmployeeData /> } />
        {/* </Route> */}

        {/* <Route element={ <RequireAuth isAllowed={ !!username && role === 'admin' } /> } > */}
          <Route path='/register' element={ <Register /> } />
        {/* </Route> */}

      </Routes>
  
    </>
  );
}

export default App;
