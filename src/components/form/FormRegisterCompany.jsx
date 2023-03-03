import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonComp from '../common/button/ButtonComp';
import './formRegister.scss';
import { er } from "../../utils/RegularExpression";
import { useEffect, useState } from "react";
import { CompanyRegister, getCompany, updateDataCompany } from "../../api/ApiCompany";

export default function FormRegisterCompany() {

    const [ isChecked, setIsChecked ] = useState(false)
    const [ data, setData] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: data
    });

    
    const onSubmit = data => {

        const authorize = isChecked? true : false    
        const newData = { ...data, authorize }
    
        if(data._id){
            updateDataCompany(newData)
            .then((res)=> {
                alert(res.msj)
            })
            .catch(error=> console.log(error))
        }else{
            CompanyRegister(newData)
            .then((res)=> {
                alert(res.msj)
            })
            .catch(error=> console.log(error))
        } 
    }


    useEffect(()=>{
        getCompany()
            .then((res)=>{
                if(res.data){
                    setData(res.data)
                    reset(res.data)
                }else{
                    setData({})
                } 
            })
            .catch(error => console.log(error))
    },[reset])


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
                    <label htmlFor="names"><span>Names *</span></label>
                    <input type="text" name='names' className='form-control' {...register('names',
                    {
                        required:true,
                        pattern: er.text,
                        maxLength:100
                    }) 
                    }/>
                    { errors.names?.type === 'required' && <p className='text-danger small'>*Name is required</p> }
                    { errors.names?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.names?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded. name must have a maximum of 100 characters.</p> }
                </div>

                <div className='form-group col-12 col-md-6 col-lg-4 '>
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

                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="docUser"><span>Document *</span></label>
                    <input type="text" name='docUser' className='form-control' placeholder="C.C" {...register('docUser',{ required:true }) }/>
                    { errors.docUser?.type === 'required' && <p className='text-danger small'>*Document is required</p> }
                </div>
            </div>
           
            <div className="row">
                <div className='form-group col-12 col-md-6 col-lg-4'>
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

            <h6>Associate a company to your account</h6>
            
            <div className='form-group col-12 col-md-8'>
                <label htmlFor="businessName"><span>Business name *</span></label>
                <input type="text" name='businessName' className='form-control'  {...register('businessName',
                    {
                        required:true,
                    }) 
                    }/>
                { errors.businessName?.type === 'required' && <p className='text-danger small'>*Business Name is required</p> } 
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
                        pattern: er.text,
                        maxLength:100
                    }) 
                    }/>
                    { errors.sector?.type === 'required' && <p className='text-danger small'>*Sector is required</p> }
                    { errors.sector?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.sector?.type === "maxLength" && <p className='text-danger small'>* Max length exceeded. Sector must have a maximum of 100 characters. </p> }
                </div>
                <div className='form-group col-12 col-md-6 col-lg-4'>
                    <label htmlFor="foundation"><span>Foundation year *</span></label>
                    <input type="date" name='foundation' className='form-control' {...register('foundation',{ required:true }) }/>
                    { errors.foundation?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                </div>

            </div>

            <div className="row">

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
                <input type="checkbox" id="check-authorize" name="check-authorize" value="true" checked={ isChecked }
                    onChange={ e => setIsChecked( !isChecked )} />
                <label htmlFor="check-authorize" className='check-authorize-text' >
                    I have read and authorize the <Link to='/' className="authorize-link" >Therms and Conditions</Link> of this Portal
                </label>
            </div>
            
            <div className='form-group col-4'>
                <ButtonComp type='submit' className='btn-submit' disabled ={ isChecked? '': 'disabled' }>SAVE</ButtonComp>
            </div>
        </form>
    </div>
  )
}
