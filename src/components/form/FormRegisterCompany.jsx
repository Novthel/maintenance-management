import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonComp from '../common/button/ButtonComp';
import './formRegister.scss';
import { er } from "../../utils/RegularExpression";

export default function FormRegisterCompany() {

    const { register, handleSubmit, formState: { errors } } = useForm({});

    

    const onSubmit = data => {
        console.log(data)
    }


  return (
    <div className="sec-register">
        <section className="sec-info-register">
            <p className="register-p" ><span>Create an account for your company</span></p>
            <p className="register-p" >Do you already have an account? <Link to='/' className="register-p-link" >Log in</Link></p>
        </section>

        <form className="container-formRegister" onSubmit={ handleSubmit( onSubmit )}>
            <h6>Representative data</h6>
            <div className="row">
                <div className='form-group col-12 col-md-6 col-lg-4'>
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

                <div className='form-group col-12 col-md-6 col-lg-4 '>
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

                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="docUser"><span>Document *</span></label>
                    <input type="text" name='docUser' className='form-control' placeholder="C.C" {...register('docUser',{ required:true }) }/>
                    { errors.docUser?.type === 'required' && <p className='text-danger small'>*Document is required</p> }
                </div>
            </div>
           
            <div className="row">
                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="birthday"><span>Year of birth *</span></label>
                    <input type="date" name='birthday' className='form-control'  {...register('birthday',{ required:true }) }/>
                    { errors.birthday?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                </div>
                <div className='form-group col-12 col-md-6'>
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
                <div className='form-group col-12 col-md-6 col-lg-4'>
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
                <div className='form-group col-12 col-md-6 col-lg-4'>
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
                <div className='form-group col-12 col-md-6 col-lg-4'>
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
                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="confirm"><span>Confirm Password *</span></label>
                    <input type="password" name='confirm' className='form-control'  {...register('confirm',{ required:true }) }/>
                    { errors.confirm?.type === 'required' && <p className='text-danger small'>*Password is required</p> }
                </div>
            </div>

            <h6>Associate a company to your account</h6>
            
            <div className='form-group col-12 col-md-8'>
                <label htmlFor="businessName"><span>Business name *</span></label>
                <input type="text" name='businessName' className='form-control'  {...register('businessName',
                    {
                        required:true,
                        pattern: er.user
                    }) 
                    }/>
                { errors.businessName?.type === 'required' && <p className='text-danger small'>*Business Name is required</p> }
                { errors.businessName?.type === 'pattern' && 
                <p className='text-danger small'>
                    *lowercase, numbers, underscores, and hyphens. must be between 3 and 16 characters.
                </p> 
                }
            </div>

            <div className="row">
                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="nit"><span>NIT *</span></label>
                    <input type="number" name='nit' className='form-control'  {...register('nit',{ required:true }) }/>
                    { errors.nit?.type === 'required' && <p className='text-danger small'>*Document is required</p> }
                </div>

                <div className='form-group col-12 col-md-6 col-lg-4 '>
                    <label htmlFor="sector"><span>Sector *</span></label>
                    <input type="text" name='sector' className='form-control' placeholder="Ex: Transportation, Develop" {...register('sector',
                    {
                        required:true,
                        pattern: er.text
                    }) 
                    }/>
                    { errors.sector?.type === 'required' && <p className='text-danger small'>*Sector is required</p> }
                    { errors.sector?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                </div>

            </div>

            <div className="row">
                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="foundation"><span>Foundation year *</span></label>
                    <input type="date" name='foundation' className='form-control'  {...register('foundation',{ required:true }) }/>
                    { errors.foundation?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                </div>

                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="companyEmail"><span>Company Email *</span></label>
                    <input type="email" name='companyEmail' className='form-control' {...register("companyEmail", 
                    { 
                        required:true,
                        pattern: er.email
                    })
                    } />
                    { errors.companyEmail?.type === 'required' && <p className='text-danger small'>*email is required</p> }
                    { errors.companyEmail?.type === 'pattern' && <p className='text-danger small'>*invalid mail format</p> }
                </div>

            </div>
            
            <div className="row">
                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="companyPhone"><span>Company Phone *</span></label>
                    <input type="number" name='companyPhone' className='form-control'  {...register('companyPhone',
                    {
                        required:true,
                        pattern: er.phone
                    }) 
                    }/>
                    { errors.companyPhone?.type === 'required' && <p className='text-danger small'>*Phone is required</p> }
                    { errors.companyPhone?.type === 'pattern' && <p className='text-danger small'>*phone must have 7 to 14 numbers</p> }
                </div>

                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="companyCellPhone"><span>Company Cell phone *</span></label>
                    <input type="number" name='companyCellPhone' className='form-control'  {...register('companyCellPhone',
                    {
                        required:true,
                        pattern: er.phone
                    }) 
                    }/>
                    { errors.companyCellPhone?.type === 'required' && <p className='text-danger small'>*cell is required</p> }
                    { errors.companyCellPhone?.type === 'pattern' && <p className='text-danger small'>*cell must have 7 to 14 numbers</p> }
                </div>
            </div>
           

            <div className='check-authorize'>
                <input type="checkbox" id="check-authorize" name="check-authorize" value="true" />
                <label htmlFor="check-authorize" className='check-authorize-text' >
                    I have read and authorize the <Link to='/' className="authorize-link" >Therms and Conditions</Link> of this Portal
                </label>
            </div>
            
            <div className='form-group col-4'>
                <ButtonComp type='submit' className='btn-submit'>SAVE</ButtonComp>
            </div>
        </form>
    </div>
  )
}
