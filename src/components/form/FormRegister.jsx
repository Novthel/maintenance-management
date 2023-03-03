import { useForm } from "react-hook-form";
import ButtonComp from '../common/button/ButtonComp';
import './formRegister.scss';
import { er } from "../../utils/RegularExpression";
import { UserRegister } from "../../api/ApiUsers";


export default function FormRegister() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({});

  const onSubmit = data => {

    const code = 0
    const newData ={
        ...data, code
    }
      UserRegister(newData)
        .then((res)=>{
            alert(res.msj)
            reset()
        })
        .catch( error => console.log(error))
  }

  return (
    <>
         <form className="container-formRegister" onSubmit={ handleSubmit( onSubmit )}>
            <h2>Register</h2>

            <div className="row">
                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="names"><span>Names *</span></label>
                    <input type="text" name='names' className='form-control'  {...register('names',
                    {
                        required:true,
                        pattern: er.text,
                        maxLength:100
                    }) 
                    }/>
                    { errors.names?.type === 'required' && <p className='text-danger small'>*Name is required..</p> }
                    { errors.names?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.names?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded. name must have a maximum of 100 characters.</p> }
                </div>

                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="lastnames"><span>LastNames *</span></label>
                    <input type="text" name='lastnames' className='form-control'  {...register('lastnames',
                    {
                        required:true,
                        pattern: er.text,
                        maxLength:100
                    }) 
                    }/>
                    { errors.lastnames?.type === 'required' && <p className='text-danger small'>*LastName is required</p> }
                    { errors.lastnames?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.lastnames?.type === "maxLength" && <p className='text-danger small'>* Max length exceeded. Lastname must have a maximum of 100 characters. </p> }
                </div>
            </div>

            <div className="row">
                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="area"><span>Area *</span></label>
                    <input type="text" name='area' className='form-control'  {...register('area',
                    {
                        required:true,
                        maxLength:100
                    }) 
                    }/>
                    { errors.area?.type === 'required' && <p className='text-danger small'>*Area is required</p> }
                    {errors.area?.type === "maxLength" && <p className='text-danger small'>* Max length exceeded. Area must have a maximum of 100 characters. </p> }
                </div>

                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="position"><span>Position *</span></label>
                    <input type="text" name='position' className='form-control'  {...register('position',
                    {
                        required:true,
                        pattern: er.text,
                        maxLength:150
                    }) 
                    }/>
                    { errors.position?.type === 'required' && <p className='text-danger small'>*Position is required</p> }
                    { errors.position?.type === 'pattern' &&  
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.position?.type === "maxLength" && <p className='text-danger small'>* Max length exceeded. Position must have a maximum of 150 characters. </p> }
                </div>
            </div>

            <div className="row">
                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="email"><span>Email *</span></label>
                    <input type="email" name='email' className='form-control' {...register("email", 
                    { 
                        required:true,
                        pattern: er.email
                    })
                    } />
                    { errors.email?.type === 'required' && <p className='text-danger small'>*email is required</p> }
                    { errors.email?.type === 'pattern' && <p className='text-danger small'>*invalid mail format</p> }
                </div>

                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="phone"><span>Phone or Cell *</span></label>
                    <input type="number" name='phone' className='form-control'  {...register('phone',
                    { 
                        required:true,
                        pattern: er.phone
                    }) 
                    }/>
                    { errors.phone?.type === 'required' && <p className='text-danger small'>*Phone is required</p> }
                    { errors.phone?.type === 'pattern' && <p className='text-danger small'>*phone must have 7 to 14 numbers</p> }
                </div>
            </div>

            <div className="row">
              <div className='form-group'>
                  <label htmlFor="username"><span>Username *</span></label>
                  <input type="text" name='username' className='form-control' {...register("username", 
                  { 
                      required:true,
                      pattern: er.user
                  })
                  } />
                  { errors.username?.type === 'required' && <p className='text-danger small'>*user is required</p> }
                  { errors.username?.type === 'pattern' && 
                  <p className='text-danger small'>
                      *Lowercase letters, numbers, underscore, and hyphen. Usernames must be between 3 and 24 characters
                  </p> }
              </div>
            </div>

            <div className="row">
                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="password"><span>Password *</span></label>
                    <input type="password" name='password' className='form-control'  {...register('password',
                    { 
                        required:true,
                        pattern: er.password
                    }) 
                    }/>
                    { errors.password?.type === 'required' && <p className='text-danger small'>*Password is required</p> }
                    { errors.password?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * password must have: <br/>
                        - 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and at least 8 digits.
                    </p> }
                </div>

                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="Role"><span>Role</span></label>
                    <select className='form-select mb-2' {...register('role', { require: true })} >
                            <option className="value-options" value="">-- Select role -- </option>
                            <option className="value-options" value="operator">Operator</option>
                            <option className="value-options" value="technician">Technician</option>
                            <option className="value-options" value="supervisor">Supervisor</option>
                            <option className="value-options" value="leader">Leader</option>
                            <option className="value-options" value="Admin">Admin</option>
                    </select>
                    { errors.role?.type === 'required' && <p className='text-danger small'>*Role is required</p> }
                </div>  
            </div>
            
            <div className='form-group col-4 sec-submit'>
                <ButtonComp type='submit' className='btn-submit'>SAVE</ButtonComp>
            </div>
        </form>
    </>
  )
}


