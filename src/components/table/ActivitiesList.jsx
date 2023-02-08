import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';
import Search from "../common/search/Search";
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import './list.scss'
import { Link, useParams } from "react-router-dom";
import { getAllOrders, getOrderById, getOrderByStatus } from '../../api/ApiOrders';



const ActivitiesList = () => {

    const params = useParams();

    const [userRole, setUserRole] = useState(null);
    const [list, setList] = useState([]);
    const { role } = useContext(AppContext)

    const options = [
        { label: 'Status', value: 'all' },
        { label: 'Pending', value: 'pending' },
        { label: 'Executed', value: 'executed' },
        { label: 'Finalized', value: 'finalized' },
    ];

    const handleChange =(e)=> {
        const status = e.target.value;
        if(status !== 'all'){
            getOrderByStatus(status)
            .then((res)=>{
                if(res.state === 'Ok'){
                    setList(res.data)
                }
            })
        }else{
            getAllOrders()
            .then((res)=> {
                if(res.state === 'Ok'){
                    setList(res.data)
                }
            })
        }
    }

    console.log(list)
    useEffect(()=>{
        if(params.id){
            getAllOrders()
            .then(res => console.log(res))
        }else {
            if(role){
                getAllOrders()
                .then((res)=> {
                    if(res.state === 'Ok'){
                        setList(res.data)
                    }
                })
            }
        }
       
    },[role])

    
    return (
        <>
            <div className="container col-12 sec-filter">
                <Search />
                <SelectComp  options={ options } handleChange={ handleChange } />
            </div>

            <div className="container">
                <div className="table-responsive">
                    <table className="table table-hover table-bordered table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Order N°</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">Maintenance Activity</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {list.map((o) => <tr key={o.ordernumber}>
                                                <td>{o.ordernumber}</td>
                                                <td>{new Date (o.ordercreationdate).toLocaleDateString()}</td>
                                                <td>{o.activity}</td>
                                                <td className="status">{ o.status }</td>
                                                
                                                {
                                                    userRole === 'technician'?
                                                    (
                                                        <td><Link to={`/dashboard-manager/Activity/${o.ordernumber}`}><BsFillEyeFill /></Link></td>
                                                    )
                                                    :
                                                    <td><Link to={`/dashboard-manager/activity-List/${o.ordernumber}`}><BsFillEyeFill /></Link></td>
                                                }
                                            </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>
                  
            </div>
        </>
    );
}

export default ActivitiesList;
