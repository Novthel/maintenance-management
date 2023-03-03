import './sidebar.scss';
import logo from '../../assets/hair-brush.webp';
import ButtonComp from '../common/button/ButtonComp';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/UserProvider';


export default function Sidebar() {

  const { role, name, lastname, businessName } = useContext( AppContext );
 
 

  const logout =()=>{
    localStorage.removeItem('token')
  }


  return (
    <div className='container-sidebar col-md-3'>
        <section className='company'>
          <img src={ logo } alt='logo-company' className='logo-sidebar' />
          <h4 className='title-company'>{ businessName }</h4>
        </section>
       
        <section className='text-sidebar'>
            <p className='text-username'>{ name } { lastname } </p>
            <p className='text-role'>{ role }</p>
        </section>

        <section className='button-group-sidebar'>

          {
            role === 'technician'? 
              <>
                <NavLink to='/dashboard-manager/activity-List'  ><ButtonComp type='button' className='btn-sidebar'>Orders</ButtonComp></NavLink>
                <NavLink to='/dashboard-manager/notification'  ><ButtonComp type='button' className='btn-sidebar'>Notify</ButtonComp></NavLink>
              </>
            :
              <>
                <NavLink to='/dashboard-manager/employees' ><ButtonComp type='button' className='btn-sidebar'>Employees</ButtonComp></NavLink>
                <NavLink to='/dashboard-manager/store'  ><ButtonComp type='button' className='btn-sidebar'>Store</ButtonComp></NavLink>
                <NavLink to='/dashboard-manager/create-Activity'  ><ButtonComp type='button' className='btn-sidebar'>Create</ButtonComp></NavLink>
              </>
          }
          {
            role === 'admin'?
              <>
                <NavLink to='/register'  ><ButtonComp type='button' className='btn-sidebar'>Register</ButtonComp></NavLink>
                <NavLink to='/dashboard-manager/help-List'  ><ButtonComp type='button' className='btn-sidebar'>Request</ButtonComp></NavLink>
              </> 
              :
                <NavLink to='/dashboard-manager/help'  ><ButtonComp type='button' className='btn-sidebar'>Help</ButtonComp></NavLink> 
          }
                <NavLink to='/'  ><ButtonComp type='button' className='btn-sidebar' onClick={ logout }>LogOut</ButtonComp></NavLink>

        </section> 
    </div>
  )
}
