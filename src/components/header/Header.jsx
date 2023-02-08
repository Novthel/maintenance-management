import logo from '../../assets/logo192.png';
import './header.scss'
import ButtonComp from '../common/button/ButtonComp';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ registerView, userRole }) => {

  const [role, setRole] = useState('');

  const logout =()=>{
    localStorage.removeItem('token')
  }


  useEffect(()=>{
    setRole(userRole)
  },[userRole])

  return (
    <section className="container-header">
        <img className='logo-company' src={ logo } alt='logo-company' />
        

          {
            role === 'admin'?
            ( 
                <ul className='options'>
                  <li><ButtonComp type='button' className='btn-menu-dashboard' onClick={ ()=> registerView('bussines') }>Bussines</ButtonComp></li>
                  <li><ButtonComp type='button' className='btn-menu-dashboard' onClick={ ()=> registerView('users') }>User</ButtonComp></li>
                </ul>
            )
            :
            null
          }

          {
            role === 'operator'?
            ( 
                <ul className='options'>
                  <Link to='/'><ButtonComp type='button' className='btn-send' onClick={ logout }>LogOut</ButtonComp></Link>
                </ul>
            )
            :
            null
          }
            
       
    </section>
  )
}

export default Header