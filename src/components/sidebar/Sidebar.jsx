import './sidebar.scss';
import logo from '../../assets/logo192.png';
import ButtonComp from '../common/button/ButtonComp';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';


export default function Sidebar() {

  const { role, name, lastname } = useContext( AppContext );
  const [ userRole, setUserRole ] = useState(null);
  const [ firstname, setFirstName] = useState(null);
  const [userlastname, setUserLastName] = useState(null);

  const logout =()=>{
    localStorage.removeItem('token')
  }


  useEffect(() => {

    setUserRole( role )
    setUserLastName( lastname )
    setFirstName( name )

  }, [lastname, name, role]);


  return (
    <div className='container-sidebar col-md-3'>
        
        <img src={ logo } alt='logo-company' className='logo-sidebar' />
        <section className='text-sidebar'>
            <h4 className='title-company'>Company Name</h4>
            <p className='text-username'>{ firstname } { userlastname }</p>
            <p className='text-role'>{ role }</p>
        </section>

        {
          userRole === 'technician'? 
          (
            <section className='button-group-sidebar'>
              <Link to='/dashboard-manager/activity-List'><ButtonComp type='button' className='btn-sidebar'>Orders</ButtonComp></Link>
              <Link to='/dashboard-manager/notification'><ButtonComp type='button' className='btn-sidebar'>Notify</ButtonComp></Link>
            </section> 
          )
          :
          <section className='button-group-sidebar'>
            <Link to='/dashboard-manager/employees'><ButtonComp type='button' className='btn-sidebar'>Employees</ButtonComp></Link>
            <Link to='/dashboard-manager/store'><ButtonComp type='button' className='btn-sidebar'>Store</ButtonComp></Link>
            <Link to='/dashboard-manager/create-Activity'><ButtonComp type='button' className='btn-sidebar'>Create</ButtonComp></Link>
          </section> 
        }

        <section className='button-group-sidebar'>
          {
            userRole === 'admin'?
              <>
                <Link to='/register'><ButtonComp type='button' className='btn-sidebar'>Register</ButtonComp></Link>
                <Link to='/dashboard-manager/help-List'><ButtonComp type='button' className='btn-sidebar'>Request</ButtonComp></Link>
              </> 
              :
              <Link to='/dashboard-manager/help'><ButtonComp type='button' className='btn-sidebar'>Help</ButtonComp></Link> 
          }
            <Link to='/'><ButtonComp type='button' className='btn-sidebar' onClick={ logout }>LogOut</ButtonComp></Link>
        </section> 
      
    </div>
  )
}
