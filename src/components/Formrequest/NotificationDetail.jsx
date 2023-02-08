import { useForm } from 'react-hook-form';
import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/UserProvider';
import ButtonComp from '../common/button/ButtonComp';
import { AiOutlineCheck } from "react-icons/ai";
import { getUser } from '../../api/ApiUsers';
import { er } from '../../utils/RegularExpression';
import { getNotificationsById, newNotification, processNotification } from '../../api/ApiNotifications.js';
import './request.scss';


export default function NotificationDetail() {

    const params = useParams();
    const navigate = useNavigate();
    const { id } = useContext( AppContext );
    
    const [name, setName] = useState('');
    const [requestData, setRequestData] = useState({});
    const [area, setArea] = useState('');
    const [lastname, setLastname] = useState('');
  

    const { register, handleSubmit, resetField, reset, formState: { errors } } = useForm({
        defaultValues: requestData
    });

   
    const onSubmit = data => {

        if(params.id){
            const status = 'processed'
            const newData = { ...data, status }
            processNotification(newData).then((res)=>{
                navigate(-1)
            })

        }else {
            const requestby = `${ name } ${lastname}`
            const newData = { ...data, requestby, area}
            newNotification(newData).then((res)=>{
                alert(res.msj)
                resetField('machine')
                resetField('areasupervisor')
                resetField('descriptionproblem')
            })
        }
    }


    useEffect(()=>{
        if(params.id){
            getNotificationsById(params.id)
                .then((res)=>{
                    setRequestData(res.data)
                    reset(res.data)
                })
        }else{
            getUser(id).then((res)=>{
                setName(res.data.names)
                setLastname(res.data.lastnames)
                setArea(res.data.area)
            })
        }  
    },[id, params.id, reset])
   

    return (
        <div className='container comp-request'>

            <form  className='form-request' onSubmit={ handleSubmit( onSubmit )} >
                <legend>MAINTENANCE REQUEST</legend>
               
                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-7'>
                        <label htmlFor="requestby"><span>Request by:</span></label>
                        <input type="text" name='requestby' className='input-request' value={ `${name} ${lastname} ` } disabled {...register('requestby')}/>
                    </div>
                    <div className='input-row2 col-12 col-sm-4'>
                        <label htmlFor="area"><span>Area:</span></label>
                        <input type="text" name='area' className='input-request' value={ area } disabled {...register('area')} />
                    </div>
                </div>

                <div className='form-line'>
                    <div className='input-row2 col-12'>
                        <label htmlFor="areasupervisor"><span>Area Supervisor:</span></label>
                        <input type="text" name='areasupervisor' className='input-request' disabled={ params.id? 'disabled': ''} {...register('areasupervisor',
                        {
                            required:true,
                            pattern: er.text,
                            maxLength: 150
                        }) 
                        }/>
                        { errors.areasupervisor?.type === 'required' && <p className='text-danger small'>*Area Supervisor is required</p> }
                        { errors.areasupervisor?.type === 'pattern' && 
                        <p className='text-danger small'>
                            * only lowercase, uppercase, accents, and spaces.
                        </p> }
                        {errors.areasupervisor?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                    </div>
                </div>

                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-6'>
                        <label htmlFor="machine"><span>Machine:</span></label>
                        <input type="text" name='machine' className='input-request' disabled={ params.id? 'disabled': ''} {...register('machine',
                        {
                            required:true,
                            maxLength: 250
                        }) 
                        }/>
                        { errors.machine?.type === 'required' && <p className='text-danger small'>*Machine is required</p> }
                        {errors.machine?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                    </div>  

                    {
                        params.id?
                        (
                            <div className='input-row2 col-12 col-sm-4'>
                                <label htmlFor="requirementdate"><span>Requirement date:</span></label>
                                <input type="text" name='requirementdate' className='input-request'  disabled {...register('requirementdate')} />
                            </div>
                        )
                        :
                        null
                    }   
                </div>

                <div className='form-line'>
                    {
                        params.id?
                        (
                            <div className='input-row2 col-12 col-sm-6'>
                                <label htmlFor="priority"><span>Priority:</span></label>
                                <input type="text" name='priority' className='input-request' disabled {...register('priority')} />
                            </div>
                        )
                        :
                        (
                            <div className='input-row2 col-12 col-sm-6 py-2'>
                                <select className="priority col-6" id="priority-order" {...register("priority")}>
                                    <option  className='option-selected' value="Priority 1">Priority 1</option>
                                    <option  className='option-value' value="Priority 2">Priority 2</option>
                                    <option  className='option-value' value="Priority 3">Priority 3</option>
                                </select>
                            </div>   
                        )
                    }
                </div>

                <br></br>

                <div className='form-line'>
                    <div className='input-row2 col-12'>
                        <label htmlFor="descriptionproblem"><span>Description of the problem: </span></label>
                        <textarea type="text" name='descriptionproblem' className='area-description' rows={4} disabled={ params.id? 'disabled': ''} 
                        {...register('descriptionproblem',
                            {
                                required:true,
                                maxLength: 2000
                            }) 
                        }/>
                        { errors.descriptionproblem?.type === 'required' && <p className='text-danger small'>*Description of the Problem is required</p> }
                        {errors.descriptionproblem?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                    </div>
                </div>

                {
                    params.id? 
                    (
                        <div className='sec-btn-send col-3'>
                            <ButtonComp className='btn-submit' type='submit' disabled={ requestData.status === 'processed'? 'disabled': ''} ><AiOutlineCheck /></ButtonComp>
                        </div> 
                    )
                    :
                    <div className='sec-btn-send col-3'>
                        <ButtonComp className='btn-submit' type='submit' >SEND</ButtonComp>
                    </div> 
                } 
            </form>           
        </div>
    )
}
