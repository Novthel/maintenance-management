import { useState, useEffect } from 'react';
import './list.scss'
import SelectComp from "../common/select/SelectComp";
import { BsFillEyeFill} from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
import { getAllRequest, getRequireByPriority } from '../../api/ApiRequest';




const HelpList = () => {

    const [requestList, setRequestList] = useState([]);

    const options = [
        { label: 'Priority', value: 'all' },
        { label: 'Priority 1', value: 'Priority 1' },
        { label: 'Priority 2', value: 'Priority 2' },
        { label: 'Priority 3', value: 'Priority 3' },
    ];

    const handleChange =(e)=> {
        const priority = e.target.value;
     
        if(priority !== 'all'){
            getRequireByPriority(priority)
            .then((res)=>{
                if(res.state === 'Ok'){
                    setRequestList(res.data)
                }
                else{
                    alert(res.msj)
                }
            })
            .catch( error => console.log(error))
        }else{
            getAllRequest()
            .then((res)=> {
                if(res.state === 'Ok'){
                    setRequestList(res.data)
                }
                else{
                    alert(res.msj)
                }
            })
            .catch( error => console.log(error))
        }
    }

    useEffect(()=>{
        getAllRequest()
        .then((res)=> {
            if(res.state === 'Ok'){
                setRequestList(res.data)
            }
            else{
                alert(res.msj)
            }
        })
        .catch( error => console.log(error))
    },[])

    return (
        <>
            <div className="container col-12 sec-filter">
                <SelectComp  options={ options } handleChange={ handleChange } />
            </div>

            <div className="container">
                <div className='table-responsive'>
                    <table className="table table-hover table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Position</th>
                                <th scope="col">Priority</th>
                            </tr>
                        </thead>

                        <tbody>
                            {requestList.map((req) => <tr key={req._id}>
                                                
                                                <td>{new Date (req.requirementdate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})}</td>
                                                <td>{ req.descriptionproblem }</td>
                                                <td>{ req.position }</td>
                                                <td className="status">{ req.priority }</td>
                                                <td><Link to={`/dashboard-manager/help/${ req._id }`}><BsFillEyeFill /></Link></td>
                                                <td className="checkMark">{ req.status === 'processed' ? <FcCheckmark/> : null }</td>
                                            </tr>
                            )}   
                        </tbody>
                    </table>
                </div>
                   
            </div>
        </>
    );
}

export default HelpList;
