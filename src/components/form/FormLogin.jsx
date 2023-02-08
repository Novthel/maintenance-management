import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ButtonComp from '../common/button/ButtonComp';
import { er } from '../../utils/RegularExpression';
import './formLogin.scss';
import { Login } from '../../api/ApiUsers';
import {  useState, useContext } from 'react';
import { AppContext } from '../../context/UserProvider';



const FormLogin = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const [error, setError] = useState(false);
    const [msjError, setmsjError] = useState();
    const navigate = useNavigate();
    const { DecodedToken } = useContext(AppContext);

    const onSubmit = (data) => {
        Login(data).then(res => {
            if(res.state === 'Ok'){
                localStorage.setItem('token', res.accessToken );
                DecodedToken()
                navigate('/dashboard-manager')
                
            }else{
                setError(true);
                setmsjError(res.msj)
                setTimeout(() => setError(false), 3000);
            }
        })   
    }


    return (
        <>
            <form className='container-form col-10 col-sm-8 col-lg-5' id='formLogin' onSubmit={ handleSubmit( onSubmit ) } >
                <legend>Welcome Back </legend>

                <div className='form-group'>
                    <label htmlFor="username"><span>User *</span></label>
                    <input type="text" name='username' className='form-control' {...register("username", 
                    { 
                        required:true,
                        pattern: er.user
                    })
                    } />
                    { errors.username?.type === 'required' && <p className='text-danger small'>*username is required</p> }
                    { errors.username?.type === 'pattern' && 
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
                { error && <div className='alert alert-danger text-center' role= 'alert'>{ msjError }</div> }
            </form>
        </>
       
    )
}

export default FormLogin;