import { useState, useEffect } from 'react';
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import './list.scss'
import { Link } from "react-router-dom";
import { getAllOrders, getByOrderAssignment } from '../../api/ApiOrders';
import SearchFile from '../common/search/SearchFile';



const ActivitiesList = ({ role, id}) => {

    const [list, setList] = useState([]);
    const [query, setQuery] = useState("");

    const keys = [ "ordernumber", "activity" ];

    const options = [
        { label: 'Status', value: 'all' },
        { label: 'Pending', value: 'pending' },
        { label: 'Executed', value: 'executed' },
        { label: 'Finalized', value: 'finalized' },
    ];

    const handleChange =(e)=> {
        const status = e.target.value;

        if(role === 'technician'){
            getByOrderAssignment(id)
            .then((res)=> {
                if(res.state === 'Ok'){
                    if(status !== 'all'){
                        const list = res.data
                        const newList = list.filter((list)=> list.orderstatus === status)
                        setList(newList)
                    }else {
                        setList(res.data)
                    }
                }
                else {
                    alert(res.msj)
                }
            })
            .catch( error => console.log(error)) 
        }else {
            getAllOrders()
            .then((res)=> {
                if(res.state === 'Ok'){
                    if(status !== 'all'){
                        const list = res.data
                        const newList = list.filter((list)=> list.orderstatus === status)
                        setList(newList)
                    }else {
                        setList(res.data)
                    }
                }
                else {
                    alert(res.msj)
                }
            })
            .catch( error => console.log(error)) 
        }
    }


    useEffect(()=>{

        if(role === 'technician'){
            getByOrderAssignment(id)
                .then(res => {
                    if(res.state === 'Ok'){
                        if(query.length === 0 || query.length < 2){
                            setList(res.data)
                        }
                        else{
                            const list = res.data
                            setList(list.filter((item) =>
                                keys.some((key) => item[key].toString().toLowerCase().includes(query))))
                        }  
                    }
                    else {
                        alert(res.msj)
                    }
                })
                .catch( error => console.log(error))
        }else {
            if(role){
                getAllOrders()
                    .then((res)=> {
                        if(query.length === 0 || query.length < 2){
                            setList(res.data)
                        }
                        else{
                            const list = res.data
                            setList(list.filter((item) =>
                                keys.some((key) => item[key].toString().toLowerCase().includes(query))))
                        }  
                    })
                    .catch( error => console.log(error))
            }
        }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id, query, role])

    return (
        <>
            <div className="container col-12 sec-filter">
               
                <SearchFile  setQuery={ setQuery } />      
                <SelectComp  options={ options } handleChange={ handleChange } />
            </div>

            <div className="container">
                <div className="table-responsive">
                    <table className="table table-hover table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Order N°</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">Maintenance Activity</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {list.map((o) => <tr key={o._id}>
                                                <td>{o.ordernumber}</td>
                                                <td>{new Date (o.ordercreationdate).toLocaleDateString()}</td>
                                                <td>{o.activity}</td>
                                                <td className="status" ><span className={ o.orderstatus === 'pending'? "text-warning": o.orderstatus === 'finalized'? "text-danger" : "text-primary" }>{ o.orderstatus }</span></td>
                                                
                                                {
                                                    role === 'technician'?
                                                    (
                                                        <td><Link to={`/dashboard-manager/Activity/${o._id}`}><BsFillEyeFill /></Link></td>
                                                    )
                                                    :
                                                    <td><Link to={`/dashboard-manager/activity-List/${o._id}`}><BsFillEyeFill /></Link></td>
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
