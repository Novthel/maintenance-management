import { useForm } from 'react-hook-form';
import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/UserProvider';
import ButtonComp from '../common/button/ButtonComp'
import { getUser } from '../../api/ApiUsers';
import './request.scss'
import { getRequestById, newRequestHelp } from '../../api/ApiRequest';
import { processRequest } from '../../api/ApiRequest.js';
import { AiOutlineCheck } from "react-icons/ai";

export default function FormHelp() {


    const params = useParams();
    const navigate = useNavigate();
    const { id } = useContext( AppContext );

    const [name, setName] = useState('');
    const [requestData, setRequestData] = useState({});
    const [position, setPosition] = useState('');
    const [lastname, setLastname] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: requestData
    });

    const onSubmit = data => {
      
        if(params.id){
            const status = 'processed'
            const newData = { ...data, status }
            processRequest(newData)
                .then((res)=>{
                    navigate(-1)
                })
                .catch(error => console.log(error))

        }else {
            const requestby = id
            const newData = { ...data, requestby }
            newRequestHelp(newData)
                .then((res)=>{
                    alert(res.msj)
                    reset()
                })
                .catch(error => console.log(error))
        }
    }

    useEffect(()=>{
        if(params.id){
            getRequestById(params.id)
                .then((res)=>{
                    const userInfo = res.data.userInfo
                    setName(userInfo.names)
                    setLastname(userInfo.lastnames)
                    setPosition(userInfo.position)
                    setRequestData(res.data.request)
                    reset(res.data.request)
                })
                .catch(error => console.log(error))
        }else{
            getUser(id).then((res)=>{
                if(res){
                    if(res.state === 'Ok'){ 
                        setName(res.data.names)
                        setLastname(res.data.lastnames)
                        setPosition(res.data.position)
                    }  
                    else {
                        alert(res.msj)
                    }
                }
            })
        }  
    },[id, params.id, reset])


  return (
        <div className='container comp-request'>

            <form  className='form-request'  onSubmit={ handleSubmit( onSubmit )} >
                <legend>Request for Technical Help</legend>
               
                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-6'>
                        <label htmlFor="requestby"><span>Request by:</span></label>
                        <input type="text" name='requestby' className='input-request' value={ `${name} ${lastname} ` } disabled />
                    </div>
                    <div className='input-row2 col-12 col-sm-4'>
                        <label htmlFor="position"><span>Position:</span></label>
                        <input type="text" name='position' className='input-request' value={ position } disabled />
                    </div>
                </div>

                <div className='form-line'>
                    {
                        params.id?
                        (
                            <div className='input-row2 col-12 col-sm-4'>
                                <label htmlFor="requirementdate"><span>Requirement date:</span></label>
                                <input type="text" name='requirementdate' className='input-request'  disabled
                                     value={ new Date (requestData.requirementdate).toLocaleDateString() }
                                />
                            </div>
                        )
                        :
                        null
                    }   
                   
                </div>

                <div className='form-line'>
                    <div className='input-row2 col-12 col-sm-7'>
                        {
                            params.id?
                            (
                                <div className='input-row2 col-12 col-sm-7'>
                                    <label htmlFor="priority"><span>Priority:</span></label>
                                    <input type="text" name='priority' className='input-request' disabled {...register('priority')} />
                                </div>
                            )
                            :
                            (
                                <div className='input-row2 col-12 col-sm-7 py-1'>
                                    <select className="priority col-6" id="priority-order" {...register("priority")}>
                                        <option  className='option-selected' value="Priority 1">Priority 1</option>
                                        <option  className='option-value' value="Priority 2">Priority 2</option>
                                        <option  className='option-value' value="Priority 3">Priority 3</option>
                                    </select>
                                </div>   
                            )
                        }
                    </div>
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
                            {
                                requestData.status !=='processed'?
                                    <ButtonComp className='btn-submit' ><AiOutlineCheck /></ButtonComp>
                                    :
                                    null
                            }
                         
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
