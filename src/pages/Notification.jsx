import React from 'react';
import NotificationDetail from '../components/Formrequest/NotificationDetail';
import Header from '../components/header/Header';

const Notification = () => {
    return (
       
            <div className='container'>
                <Header />
                <section className='sec-notify'>
                    <NotificationDetail />
                </section>
            </div>

    );
}

export default Notification;
