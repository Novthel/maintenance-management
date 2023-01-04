import logo from '../../assets/logo192.png';
import './header.scss'
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';
import ButtonComp from '../common/button/ButtonComp';

const Header = ({ registerView }) => {

  const { userSession } = useContext( AppContext );
  const [user, setUser] = useState(null);


  useEffect(() => {
    setUser( userSession )
  }, [userSession]);


  return (
    <section className="container-header">
        <img className='logo-company' src={ logo } alt='logo-company' />
        

          {
            user === 'admin'?
            ( 
                <ul className='menu-options'>
                  <li><ButtonComp type='button' className='btn-menu-dashboard' onClick={ ()=> registerView('bussines') }>Bussines</ButtonComp></li>
                  <li><ButtonComp type='button' className='btn-menu-dashboard' onClick={ ()=> registerView('users') }>User</ButtonComp></li>
                </ul>
            )
            :
            null
          }
            
       
    </section>
  )
}

export default Header