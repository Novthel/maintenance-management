import { useContext } from 'react';
import { AppContext } from '../../context/UserProvider';
import { NavLink } from 'react-router-dom';
import './menuDashboard.scss'


const MenuDashboard = () => {

    const { role } = useContext( AppContext );

    return (
        <section className='nav-dashboard'>
            {
                role === 'technician'? 
                (
                    null
                )
                :
                <ul className='menu-options'>
                    <li><NavLink to='/dashboard-manager/activity-List'>Maintenance Activities</NavLink></li>
                    <li><NavLink to='/dashboard-manager/notification-List'>Notifications</NavLink></li>
                </ul>
            }
        </section>
    );
}

export default MenuDashboard;
