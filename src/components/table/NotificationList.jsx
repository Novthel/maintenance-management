import './list.scss'
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import { Link } from "react-router-dom";


const NotificationList = () => {

    const notificationList = [
        {
            id:'01',
            date: '2022-05-11',
            description: 'comprar gancho',
            machine: 'horno',
            area: 'pintura',
            priority: 'priority 1'
        },
        {
            id:'02',
            date: '2022-05-11',
            description: 'lavar el motor',
            machine: 'khs',
            area: 'plastico',
            priority: 'priority 2'
        },
        {
            id:'03',
            date: '2022-05-11',
            description: 'implementar seguridad',
            machine: 'sidel',
            area: 'pintura',
            priority: 'priority 3'
        },
    ]

    return (
        <>
            <div className="container col-12 sec-filter">
                <SelectComp />
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
                            {notificationList.map((n) => <tr key={n.id}>
                                                
                                                <td>{new Date (n.date).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}</td>
                                                <td>{n.description}</td>
                                                <td>{n.machine}</td>
                                                <td>{n.area}</td>
                                                <td className="status">{ n.priority }</td>
                                                <td><Link to={`/dashboard-manager/notification/${n.id}`}><BsFillEyeFill /></Link></td>
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
