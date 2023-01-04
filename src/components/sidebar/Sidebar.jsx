import './sidebar.scss';
import logo from '../../assets/logo192.png';
import ButtonComp from '../common/button/ButtonComp';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';


export default function Sidebar() {

  const { userSession } = useContext( AppContext );
  const [user, setUser] = useState(null);


  useEffect(() => {
    setUser( userSession )
  }, [userSession]);


  return (
    <div className='container-sidebar col-md-3'>
        
        <img src={ logo } alt='logo-company' className='logo-sidebar' />
        <section className='text-sidebar'>
            <h4 className='title-company'>Company Name</h4>
            <p className='text-username'>
                Lorem ipsum dolor.
            </p>
        </section>

        {
          user === 'technician'? 
          (
            <section className='button-group-sidebar'>
              <Link to='/dashboard-manager/activity-List'><ButtonComp type='button' className='btn-sidebar'>Orders</ButtonComp></Link>
              <Link to='/dashboard-manager/notification/:id'><ButtonComp type='button' className='btn-sidebar'>Notify</ButtonComp></Link>
            </section> 
          )
          :
          <section className='button-group-sidebar'>
            <Link to='/dashboard-manager/employees'><ButtonComp type='button' className='btn-sidebar'>Employees</ButtonComp></Link>
            <Link to='/dashboard-manager/store'><ButtonComp type='button' className='btn-sidebar'>Store</ButtonComp></Link>
            <Link to='/dashboard-manager/create-Activity/:code'><ButtonComp type='button' className='btn-sidebar'>Create</ButtonComp></Link>
          </section> 
        }
      
        {
          user === 'admin'?
          (
            <section className='button-group-sidebar'>
              <Link to='/register'><ButtonComp type='button' className='btn-sidebar'>Register</ButtonComp></Link>
              <Link to='/'><ButtonComp type='button' className='btn-sidebar'>LogOut</ButtonComp></Link>
          </section>
          )
          :
          <section className='button-group-sidebar'>
            <Link to='/dashboard-manager/help'><ButtonComp type='button' className='btn-sidebar'>Help</ButtonComp></Link>
            <Link to='/'><ButtonComp type='button' className='btn-sidebar'>LogOut</ButtonComp></Link>
          </section> 
        }
      
    </div>
  )
}
