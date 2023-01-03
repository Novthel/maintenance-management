import './employeeData.scss';
import user from '../../assets/user.png';
import ActivitiesList from '../table/ActivitiesList';

export default function EmployeeData() {

  const data = {
    id: 12345678,
    employeename: 'armando paredes',
    position: 'mecanico',
    area: 'Tecnologia',
    phone: 3000000,
    turn: 'dia',
    employeeEmail: 'example@company.com'
  }



  return (
    <div className='container-Profile'>

        <section className='row col-12 employee-profile'>
            <div className='info-employeeProfile col-12 col-md-8'>
                <form className='form-employeeProfile col-10' >

                    <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="employeName"><span>Employee Name:</span></label>
                            <input type="text" name='employeName' className='input-profile' value={ data.employeename } />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-position"><span>Position:</span></label>
                            <input type="text" name='employee-position' className='input-profile' value={ data.position } />
                        </div>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-area"><span>Area:</span></label>
                            <input type="text" name='employee-area' className='input-profile' value={ data.area } />
                        </div>
                    </div>
                
                    <div className='form-line'>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-turn"><span>Turn:</span></label>
                            <input type="text" name='employee-turn' className='input-profile' value={ data.turn } />
                        </div>
                        <div className='input-row2 col-5'>
                            <label htmlFor="employee-phone"><span>Phone:</span></label>
                            <input type="number" name='employee-phone' className='input-profile' value={ data.phone } />
                        </div>
                    </div>
                
                    <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="employee-email"><span>Email:</span></label>
                            <input type="email" name='employee-email' className='input-profile' value={ data.employeeEmail } />
                        </div>
                    </div>
                </form>           
            </div>
            <div className='photo-employeeProfile col-12 col-md-3'>
                <img src={ user } alt='employeephoto' className='employee-photo'/>
                <p className='employee-name'>{ data.employeename }</p>
            </div>
        </section>

        <section className='row col-12'> 
            <div className='employeeProfile-activities col-12'>
                <ActivitiesList />
            </div>
        </section>
        
    </div>
  )
}
