import { useForm } from "react-hook-form";
import ButtonComp from '../common/button/ButtonComp';
import './formRegister.scss';
import { er } from "../../utils/RegularExpression";

export default function FormRegister() {

  const { register, handleSubmit, formState: { errors } } = useForm({});

  const onSubmit = data => {
      console.log(data)
  }

  return (
    <>
         <form className="container-formRegister" onSubmit={ handleSubmit( onSubmit )}>
            <h2>User Register</h2>

            <div className="row">
                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="name"><span>Names *</span></label>
                    <input type="text" name='name' className='form-control'  {...register('name',
                    {
                        required:true,
                        pattern: er.text
                    }) 
                    }/>
                    { errors.name?.type === 'required' && <p className='text-danger small'>*Name is required</p> }
                    { errors.name?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                </div>

                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="lastname"><span>LastNames *</span></label>
                    <input type="text" name='lastname' className='form-control'  {...register('lastname',
                    {
                        required:true,
                        pattern: er.text
                    }) 
                    }/>
                    { errors.lastname?.type === 'required' && <p className='text-danger small'>*LastName is required</p> }
                    { errors.lastname?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                </div>
            </div>

            <div className="row">
                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="area"><span>Area *</span></label>
                    <input type="text" name='area' className='form-control'  {...register('area',
                    {
                        required:true,
                        pattern: er.text
                    }) 
                    }/>
                    { errors.area?.type === 'required' && <p className='text-danger small'>*Area is required</p> }
                    { errors.area?.type === 'pattern' &&  
                      <p className='text-danger small'>
                          * only lowercase, uppercase, accents, and spaces.
                      </p> 
                    }
                </div>

                <div className='form-group col-12 col-md-6'>
                    <label htmlFor="turn"><span>Turn *</span></label>
                    <input type="text" name='turn' className='form-control'  {...register('turn',{ required:true }) }/>
                    { errors.turn?.type === 'required' && <p className='text-danger small'>*Turn is required</p> }
                </div>
            </div>
           
            <div className="row">
                <div className='form-group col-12'>
                    <label htmlFor="position"><span>Position *</span></label>
                    <input type="text" name='position' className='form-control'  {...register('position',
                    {
                        required:true,
                        pattern: er.text
                    }) 
                    }/>
                    { errors.position?.type === 'required' && <p className='text-danger small'>*Position is required</p> }
                    { errors.position?.type === 'pattern' &&  
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
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
                  <input type="email" name='username' className='form-control' {...register("username", 
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
                    <label htmlFor="confirm"><span>Confirm Password *</span></label>
                    <input type="password" name='confirm' className='form-control'  {...register('confirm',{ required:true }) }/>
                    { errors.confirm?.type === 'required' && <p className='text-danger small'>*Password is required</p> }
                </div>
            </div>
            
            <div className='form-group col-4 sec-submit'>
                <ButtonComp type='submit' className='btn-submit'>SAVE</ButtonComp>
            </div>
        </form>
    </>
  )
}


