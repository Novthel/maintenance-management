import './sidebar.scss';
import logo from '../../assets/logo192.png';
import ButtonComp from '../common/button/ButtonComp';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='container-sidebar col-3'>
        
        <img src={ logo } alt='logo-company' className='logo-sidebar' />
        <section className='text-sidebar'>
            <h4 className='title-company'>Company Name</h4>
            <p className='text-username'>
                Lorem ipsum dolor.
            </p>
        </section>

       <section className='button-group-sidebar'>
            <Link to='/'><ButtonComp type='button' className='btn-sidebar'>Employes</ButtonComp></Link>
            <Link to='/'><ButtonComp type='button' className='btn-sidebar'>Store</ButtonComp></Link>
            <Link to='/'><ButtonComp type='button' className='btn-sidebar'>Create Activity</ButtonComp></Link>
       </section> 

       <section className='button-group-sidebar'>
            <Link to='/'><ButtonComp type='button' className='btn-sidebar'>Log Out</ButtonComp></Link>
            <Link to='/'><ButtonComp type='button' className='btn-sidebar'>Help</ButtonComp></Link>
       </section> 
    </div>
  )
}