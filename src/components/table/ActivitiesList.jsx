import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/UserProvider';
import Search from "../common/search/Search";
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import './list.scss'
import { Link } from "react-router-dom";



const ActivitiesList = () => {

    const { userSession } = useContext( AppContext );
    const [user, setUser] = useState('technician');

    useEffect(()=>{
        setUser( userSession )
    },[userSession])

    const list = [
        {
            code:'0001',
            date: '2022-05-11',
            activity: 'limpieza',
            status: 'pending',
        },
        {
            code:'0002',
            date: '2022-05-11',
            activity: 'carga',
            status: 'finalized',
        },
        {
            code:'0003',
            date: '2022-05-11',
            activity: 'desmonte',
            status: 'executed',
        },
    ]

    return (
        <>
            <div className="container col-12 sec-filter">
                <Search />
                <SelectComp />
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
                            {list.map((o) => <tr key={o.code}>
                                                <td>{o.code}</td>
                                                <td>{new Date (o.date).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}</td>
                                                <td>{o.activity}</td>
                                                <td className="status">{ o.status }</td>
                                                
                                                {
                                                    user === 'technician'?
                                                    (
                                                        <td><Link to={`/dashboard-manager/create-Activity/${o.code}`}><BsFillEyeFill /></Link></td>
                                                    )
                                                    :
                                                    <td><Link to={`/dashboard-manager/activity-List/${o.code}`}><BsFillEyeFill /></Link></td>
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
