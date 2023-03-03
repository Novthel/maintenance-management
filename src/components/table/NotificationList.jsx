import { useState, useEffect, useContext } from 'react';
import './list.scss'
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { getAllNotifications } from '../../api/ApiNotifications';
import { AppContext } from '../../context/UserProvider';


const NotificationList = () => {

    const [notificationList, setNotificationList] = useState([]);
    const [status, setStatus] = useState('all');
    const [priority, setPriority] = useState('all');
    
    const { role } = useContext(AppContext)
    
    const optionProcessed = [
        { label: 'State', value: 'all' },
        { label: 'pending', value: 'pending' },
        { label: 'processed', value: 'processed' },
    ];

    const optionPriority = [
        { label: 'Priority', value: 'all' },
        { label: 'Priority 1', value: 'Priority 1' },
        { label: 'Priority 2', value: 'Priority 2' },
        { label: 'Priority 3', value: 'Priority 3' },
    ];


    const handleChangePriority =(e)=> {
        const priority = e.target.value;
        setPriority(priority)

        getAllNotifications()
        .then((res)=>{
            if(priority !== 'all'){
                const listPriority = res.data.filter((l)=> l.priority === priority )
                if(status !== 'all'){
                    const list = listPriority.filter((l)=> l.status === status )
                    setNotificationList(list)
                }else{
                    setNotificationList(listPriority)
                }
            }else {
                if(status !== 'all'){
                    setNotificationList(res.data.filter((l)=> l.status === status ) )
                }else{
                    setNotificationList(res.data)
                }
            }
        })
        .catch( error => console.log(error))
    }

    const handleChangeProcessed = (e)=>{
        const status = e.target.value;
        setStatus(status)

        getAllNotifications()
        .then((res)=>{
            if(priority !== 'all'){
                const listPriority = res.data.filter((l)=> l.priority === priority )
                if(status !== 'all'){
                    const list = listPriority.filter((l)=> l.status === status )
                    setNotificationList(list)
                }else{
                    setNotificationList(listPriority)
                }
            }else {
                if(status !== 'all'){
                    setNotificationList(res.data.filter((l)=> l.status === status ) )
                }else{
                    setNotificationList(res.data)
                }
            }
        })
        .catch( error => console.log(error))
    }

    useEffect(()=>{
        if(role){
            getAllNotifications()
            .then((res)=> {
                if(res.state === 'Ok'){
                    setNotificationList(res.data)
                }
                else{
                    alert(res.msj)
                }
            })
            .catch( error => console.log(error))
        }
      
    },[role])

    return (
        <>
            <div className="container col-12 sec-filter">
                <SelectComp  options={ optionPriority } handleChange={ handleChangePriority } />
                <SelectComp  options={ optionProcessed } handleChange={ handleChangeProcessed } />
            </div>

            <div className="container">
                <div className='table-responsive'>
                    <table className="table table-hover table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th></th>
                                <th scope="col">Description</th>
                                <th></th>
                                <th scope="col">Machine</th>
                                <th></th>
                                <th scope="col">Area</th>
                                <th></th>
                                <th scope="col">Priority</th>
                            </tr>
                        </thead>

                        <tbody>
                            {notificationList.map((n) => <tr key={n._id}>
                                                
                                                <td>{new Date (n.requirementdate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}</td>
                                                <td>|</td>
                                                <td>{ n.descriptionproblem }</td>
                                                <td>|</td>
                                                <td>{ n.machine }</td>
                                                <td>|</td>
                                                <td>{ n.area }</td>
                                                <td>|</td>
                                                <td className="status">{ n.priority }</td>
                                                <td>|</td>
                                                <td><Link to={`/dashboard-manager/notification/${ n._id }`}><BsFillEyeFill /></Link></td>
                                                <td></td>
                                                <td className="checkMark">{ n.status === 'processed' ? <FcCheckmark/> : null }</td>
                                            </tr>
                            )}   
                        </tbody>
                    </table>
                </div>
                   
            </div>
        </>
    );
}

export default NotificationList;
