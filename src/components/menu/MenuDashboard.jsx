import { Link } from 'react-router-dom';
import './menuDashboard.scss'

const MenuDashboard = () => {
    return (
        <section className='nav-dashboard'>
            <ul className='menu-options'>
                <li><Link to='/dashboard-manager/activity-List'>Maintenance Activities</Link></li>
                <li><Link to='/dashboard-manager/notification'>Notifications</Link></li>
            
            </ul>
        </section>
    );
}

export default MenuDashboard;
