import React, { useContext, useState, useEffect} from 'react';
import NotificationDetail from '../components/Formrequest/NotificationDetail';
import Header from '../components/header/Header';
import { AppContext } from '../context/UserProvider';

const Notification = () => {
    const { role } = useContext( AppContext );
    const [userRole, setUserRole] = useState(null);


    useEffect(() => {
        setUserRole(role)
    }, [role]);

    return (
       
            <div className='container'>
                <Header userRole={ userRole } />
                <section className='sec-notify'>
                    <NotificationDetail />
                </section>
            </div>

    );
}

export default Notification;
