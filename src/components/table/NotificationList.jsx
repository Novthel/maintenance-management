import { useState, useEffect } from 'react';
import './list.scss'
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { getAllNotifications, getNotificationsByPriority } from '../../api/ApiNotifications';




const NotificationList = () => {

    const [notificationList, setNotificationList] = useState([]);


    const options = [
        { label: 'Priority', value: 'all' },
        { label: 'Priority 1', value: 'Priority 1' },
        { label: 'Priority 2', value: 'Priority 2' },
        { label: 'Priority 3', value: 'Priority 3' },
    ];

    const handleChange =(e)=> {
        const priority = e.target.value;
     
        if(priority !== 'all'){
            getNotificationsByPriority(priority)
            .then((res)=>{
                if(res.state === 'Ok'){
                    setNotificationList(res.data)
                }
            })
        }else{
            getAllNotifications()
            .then((res)=> {
                if(res.state === 'Ok'){
                    setNotificationList(res.data)
                }
            })
        }
    }

    useEffect(()=>{
        getAllNotifications()
        .then((res)=> {
            if(res.state === 'Ok'){
                setNotificationList(res.data)
            }
        })
    },[])

    return (
        <>
            <div className="container col-12 sec-filter">
                <SelectComp  options={ options } handleChange={ handleChange } />
            </div>

            <div className="container">
                <div className='table-responsive'>
                    <table className="table table-hover table-bordered table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Machine</th>
                                <th scope="col">Area</th>
                                <th scope="col">Priority</th>
                            </tr>
                        </thead>

                        <tbody>
                            {notificationList.map((n) => <tr key={n._id}>
                                                
                                                <td>{new Date (n.requirementdate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}</td>
                                                <td>{ n.descriptionproblem }</td>
                                                <td>{ n.machine }</td>
                                                <td>{ n.area }</td>
                                                <td className="status">{ n.priority }</td>
                                                <td><Link to={`/dashboard-manager/notification/${ n._id }`}><BsFillEyeFill /></Link></td>
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
