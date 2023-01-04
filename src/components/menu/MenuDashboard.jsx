import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';
import { Link } from 'react-router-dom';
import './menuDashboard.scss'


const MenuDashboard = () => {

   
    const [user, setUser] = useState(null);
    const { userSession } = useContext( AppContext );


    useEffect(() => {
        setUser( userSession )
    }, [userSession]);


    return (
        <section className='nav-dashboard'>
            {
                user === 'technician'? 
                (
                    null
                )
                :
                <ul className='menu-options'>
                    <li><Link to='/dashboard-manager/activity-List'>Maintenance Activities</Link></li>
                    <li><Link to='/dashboard-manager/notification'>Notifications</Link></li>
                </ul>
            }
        </section>
    );
}

export default MenuDashboard;
