import './employeeData.scss';
import user from '../../assets/user.png';
import ActivitiesList from '../table/ActivitiesList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../api/ApiUsers';


export default function EmployeeData() {

    const params = useParams()
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [area, setArea] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
   

    useEffect(() => {
      getUser(params.id)
        .then((res)=>{
            console.log(res.data)
            setRole(res.data.role)
            setName(res.data.names)
            setLastname(res.data.lastnames)
            setArea(res.data.area)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setPosition(res.data.position)

        })
        .catch( error => console.log(error))
    }, [params.id]);


  return (
    <div className='container-Profile'>

        <section className='row col-12 employee-profile'>
            <div className='info-employeeProfile col-12 col-md-8'>
                <form className='form-employeeProfile col-12' >

                    <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="employeName"><span>Employee Name:</span></label>
                            <input type="text" name='employeName' className='input-profile'  value={ `${name} ${lastname} ` } disabled />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-position"><span>Position:</span></label>
                            <input type="text" name='employee-position' className='input-profile' value={ position } disabled/>
                        </div>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-area"><span>Area:</span></label>
                            <input type="text" name='employee-area' className='input-profile' value={ area } disabled />
                        </div>
                    </div>
                
                    <div className='form-line'>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-phone"><span>Phone:</span></label>
                            <input type="number" name='employee-phone' className='input-profile' value={ phone } disabled/>
                        </div>
                    </div>
                
                    <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="employee-email"><span>Email:</span></label>
                            <input type="email" name='employee-email' className='input-profile' value={ email } disabled />
                        </div>
                    </div>
                </form>           
            </div>
            <div className='photo-employeeProfile col-12 col-md-3'>
                <img src={ user } alt='employeephoto' className='employee-photo'/>
                <p className='employee-name'>{ position }</p>
            </div>
        </section>

        <section className='row col-12'> 
            {
                role === 'technician'?
                <div className='employeeProfile-activities col-12'>
                    <ActivitiesList role={ role }  id={ params.id } />
                </div>
                :
                null
            }
           
        </section>
        
    </div>
  )
}
