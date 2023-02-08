import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';
import { Link } from 'react-router-dom';
import './menuDashboard.scss'


const MenuDashboard = () => {

    const { role } = useContext( AppContext );
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        setUserRole( role )
    }, [role]);


    return (
        <section className='nav-dashboard'>
            {
                userRole === 'technician'? 
                (
                    null
                )
                :
                <ul className='menu-options'>
                    <li><Link to='/dashboard-manager/activity-List'>Maintenance Activities</Link></li>
                    <li><Link to='/dashboard-manager/notification-List'>Notifications</Link></li>
                </ul>
            }
        </section>
    );
}

export default MenuDashboard;
