import logo from '../../assets/logo192.png';
import './header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="container-header">
        <img className='logo-company' src={ logo } alt='logo-company' />
        <ul className='menu-options'>
            <li><Link to='/' >Login as Admin</Link></li>
        </ul>
    </section>
  )
}

export default Header