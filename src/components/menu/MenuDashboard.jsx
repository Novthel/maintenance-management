import ButtonComp from '../common/button/ButtonComp';
import './menuDashboard.scss'

const MenuDashboard = ({ mode }) => {
    return (
        <section className='nav-dashboard'>
            <ul className='menu-options'>
                <li><ButtonComp  className='btn-menu-dashboard' type='button' onClick={ ()=> mode('activity') } >Maintenance Activities</ButtonComp></li>
                <li><ButtonComp  className='btn-menu-dashboard' type='button' onClick={ ()=> mode('notification') } >Notifications</ButtonComp></li>
            
            </ul>
        </section>
    );
}

export default MenuDashboard;
