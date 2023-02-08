import { BsFillEyeFill } from "react-icons/bs";
import './list.scss'
import { Link } from "react-router-dom";
import Search from '../common/search/Search';
import { useState, useEffect } from "react";
import { getAllUser } from "../../api/ApiUsers";



const Employees = () => {

   const [listEmployee, setListEmployee] = useState([]);

   useEffect(() => {
    getAllUser()
        .then((res)=> {
            if(res.state === 'Ok'){
                setListEmployee(res.data)
            }
        })
  
   },[]);

    return (
        <>
            <div className="container col-12 sec-filter">
                <Search />
            </div>

            <div className="container">
                <div className="table-responsive">
                    <table className="table table-hover table-bordered table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Code Employee</th>
                                <th scope="col">Employee name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Turn</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listEmployee.map((e) => <tr key={ e._id }>
                                                    <td>{ e.code }</td>
                                                    <td>{ e.names } { e.lastnames }</td>
                                                    <td>{ e.position }</td>
                                                    <td>{ e.turn }</td>
                                                    <td><Link to={`/dashboard-manager/employees/${ e._id }`}><BsFillEyeFill /></Link></td>
                                                </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    );
}

export default Employees;
