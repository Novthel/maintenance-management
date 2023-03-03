import { BsFillEyeFill } from "react-icons/bs";
import './list.scss'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllUser } from "../../api/ApiUsers";
import SearchFile from "../common/search/SearchFile";



const Employees = () => {

   const [listEmployee, setListEmployee] = useState([]);
   const [query, setQuery] = useState("");

   const keys = ["names", "lastnames", "position", "code"];

   useEffect(() => {
    
    getAllUser()
        .then((res)=> {
            if(res.state === 'Ok'){
                if(query.length === 0 || query.length < 2){
                    setListEmployee(res.data)
                }
                else{
                    const list = res.data
                    setListEmployee(list.filter((item) =>
                        keys.some((key) => item[key].toString().toLowerCase().includes(query))))
                }  
            }
            else{
                alert(res.msj)
            }
        })
        .catch(error => console.log(error))
  
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[query]);


    return (
        <>
            <div className="container col-12 sec-filter">
                <SearchFile  setQuery={ setQuery } />
            </div>

            <div className="container">
                <div className="table-responsive">
                    <table className="table table-hover table-striped text-center w-90 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Code Employee</th>
                                <th></th>
                                <th scope="col">Employee name</th>
                                <th></th>
                                <th scope="col">Position</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listEmployee.map((e) => <tr key={ e._id }>
                                                    <td>{ e.code }</td>
                                                    <td>|</td>
                                                    <td>{ e.names } { e.lastnames }</td>
                                                    <td>|</td>
                                                    <td>{ e.position }</td>
                                                    <td>|</td>
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
