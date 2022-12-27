import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ButtonComp from '../common/button/ButtonComp';
import { er } from '../../utils/RegularExpression';
import './formLogin.scss';


const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({});

    const onSubmit = data => {
        console.log(data)
    }


    return (
        <form className='container-form col-10 col-sm-8 col-lg-5' id='formLogin' onSubmit={ handleSubmit( onSubmit ) } >
            <legend>Welcome Back </legend>

            <div className='form-group'>
                <label htmlFor="user"><span>User *</span></label>
                <input type="email" name='user' className='form-control' {...register("user", 
                { 
                    required:true,
                    pattern: er.user
                })
                } />
                { errors.user?.type === 'required' && <p className='text-danger small'>*user is required</p> }
                { errors.user?.type === 'pattern' && 
                <p className='text-danger small'>
                    *Lowercase letters, numbers, underscore, and hyphen. Usernames must be between 3 and 24 characters
                </p> }
            </div>
            
            <div className='form-group'>
                <label htmlFor="password"><span>Password *</span></label>
                <input type="password" name='password' className='form-control'  {...register('password',{ required:true }) }/>
                { errors.password?.type === 'required' && <p className='text-danger small'>*Password is required</p> }
            </div>

            <div className='form-group'>
                <ButtonComp type='submit' className='btn-submit' >LOGIN</ButtonComp>
            </div>

            <div className='text-msg'>
                <Link className='text-p'>Forgot Password?</Link>
            </div> 
        </form>
    )
}

export default FormLogin;