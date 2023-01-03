import { BsFillEyeFill } from "react-icons/bs";
import './list.scss'
import { Link } from "react-router-dom";
import Search from '../common/search/Search';



const Employees = () => {

    const toolList = [
        {
            codeEmployee:'01',
            employeeName: 'ronald narvaez',
            position: 'operario',
            turn: 'dia'
        },
        {
            codeEmployee:'02',
            employeeName: 'evaristo gomez',
            position: 'mecanico',
            turn: 'noche'
        },
        {
            codeEmployee:'03',
            employeeName: 'raul jimenez',
            position: 'electricista',
            turn: 'dia'
        },
    ]

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
                            {toolList.map((e) => <tr key={ e.codeEmployee }>
                                                    <td>{ e.codeEmployee }</td>
                                                    <td>{ e.employeeName }</td>
                                                    <td>{ e.position }</td>
                                                    <td>{ e.turn }</td>
                                                    <td><Link to={`/dashboard-manager/employees/${ e.codeEmployee }`}><BsFillEyeFill /></Link></td>
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
