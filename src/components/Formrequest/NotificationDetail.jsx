import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';
import ButtonComp from '../common/button/ButtonComp'
import './request.scss'


export default function NotificationDetail() {

    const [user, setUser] = useState(null);
    const { userSession } = useContext( AppContext );

    useEffect(()=>{
        setUser( userSession )
    },[userSession])

    return (
        <div className='container comp-request'>

            <form  className='form-request' >
                <legend>MAINTENANCE REQUEST</legend>
               
                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-7'>
                        <label htmlFor="request-notification"><span>Request by:</span></label>
                        <input type="text" name='request-notification' className='input-request' />
                    </div>
                    <div className='input-row2 col-12 col-sm-4'>
                        <label htmlFor="area"><span>Area:</span></label>
                        <input type="text" name='area' className='input-request' />
                    </div>
                </div>

                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-7'>
                        <label htmlFor="area-supervisor"><span>Area Supervisor:</span></label>
                        <input type="text" name='area-supervisor' className='input-request' />
                    </div>
                    <div className='input-row2 col-12 col-sm-4'>
                        <label htmlFor="notification-date"><span>Requirement Date:</span></label>
                        <input type="date" name='notification-date' className='input-request' />
                    </div>
                </div>

                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-7'>
                        <label htmlFor="machine"><span>Machine:</span></label>
                        <input type="text" name='machine' className='input-request' />
                    </div>
                    <div className='input-row2 col-12 col-sm-4'>
                        <label htmlFor="notification-priority"><span>Priority:</span></label>
                        <input type="text" name='notification-priority' className='input-request' />
                    </div>
                </div>

                <br></br>
                
                <div className='form-line'>
                    <div className='input-row2 col-12'>
                        <label htmlFor="description-problem"><span>Description of the problem: </span></label>
                        <textarea type="text" name='description-problem' className='area-description' rows={4} />
                    </div>
                </div>
                {
                    user === 'admin'? 
                    (
                        null
                    )
                    :
                    <div className='sec-btn-send col-3'>
                        <ButtonComp className='btn-submit'>SEND</ButtonComp>
                    </div> 
                }
                  
            </form>           

        </div>

    )
}
