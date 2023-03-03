import './order.scss'
import ButtonComp from '../common/button/ButtonComp';
import { useForm } from "react-hook-form";
import { er } from '../../utils/RegularExpression';
import { newOrder } from '../../api/ApiOrders';
import { useEffect, useState } from 'react';
import { getUserByRole } from '../../api/ApiUsers.js';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotificationsById } from '../../api/ApiNotifications';


export default function CreateOrder() {

    const [ListTechnician, setListTechnician] = useState([]);
    const [ListLeader, setListLeader] = useState([]);
    const [data, setData] = useState([]);
    const [ userRequest, setUserRequest ] = useState('');
    const params = useParams();
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: data
    });
    

    const onSubmit = data => {
        const ordercreationdate = new Date()
        const ordernumber = 0
        const requestby = userRequest
        
        if(params.id){
            const newData = {
                ...data, ordercreationdate,
                ordernumber, requestby
            } 
            newOrder(newData)
                .then((res)=>{
                    alert(res.msj) 
                    reset()
                    navigate('/dashboard-manager/activity-List')
                })
                .catch(error => console.log(error))
        }else {
            const newData = {
                ...data, ordercreationdate,
                ordernumber
            }
            newOrder(newData)
                .then((res)=>{
                    alert(res.msj) 
                    reset()
                    navigate('/dashboard-manager/activity-List')
                })
                .catch(error => console.log(error))
        }
        
    }

    useEffect(()=>{
        if(params.id){
            getNotificationsById(params.id)
            .then(res =>{
                const userInfo = res.data.userInfo
                setUserRequest(`${ userInfo.names } ${ userInfo.lastnames }`)
                setData(res.data.notification)
                reset(res.data.notification)
            })
        }
        getUserByRole('technician')
            .then(res => setListTechnician(res.data))
            .catch(error => console.log(error))
        getUserByRole('leader')
            .then(res => setListLeader(res.data))
            .catch(error => console.log(error))
    },[params.id, reset])

  return (

    <div className='container comp-order'>
        <form  className='form-order' onSubmit={ handleSubmit( onSubmit )} >
            <legend>Create Maintenance Work Order</legend>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-3' hidden>
                    <label htmlFor="ordernumber"><span>Order n°</span></label>
                    <input type="text" name='ordernumber' className='input-order' {...register("ordernumber")}/>
                </div>

                <div className="select col-12">
                    <select className="priority col-5 col-sm-3" {...register("priority")}>
                        <option  className='option-selected' value="Priority 1">Priority 1</option>
                        <option  className='option-value' value="Priority 2">Priority 2</option>
                        <option  className='option-value' value="Priority 3">Priority 3</option>
                    </select>
                </div>   
            </div>

            <br></br>

            <div className='form-line'>
                {
                    params.id?
                   
                        <div className='input-row2 col-12 col-md-8'>
                            <label htmlFor="requestby"><span>Request by:</span></label>
                            <input type="text" name='requestby' className='input-order' value={ userRequest } disabled/>
                        </div>
                        :
                        <div className='input-row2 col-12 col-md-8'>
                            <label htmlFor="requestby"><span>Request by:</span></label>
                            <input type="text" name='requestby' className='input-order' {...register('requestby',
                            {
                                required:true,
                                pattern: er.text,
                                maxLength:150
                            }) 
                            }/>
                            { errors.requestby?.type === 'required' && <p className='text-danger small'>*Request by is required</p> }
                            { errors.requestby?.type === 'pattern' && 
                            <p className='text-danger small'>
                                * only lowercase, uppercase, accents, and spaces.
                            </p> }
                            {errors.requestby?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                        </div>
                }
                

                <div className='input-row2 col-12 col-md-3'>
                    <label htmlFor="area"><span>Area:</span></label>
                    <input type="text" name='area' className='input-order' disabled={ params.id? 'disabled': '' }  {...register('area',
                    {
                        required:true,
                        maxLength:100
                    }) 
                    }/>
                    { errors.area?.type === 'required' && <p className='text-danger small'>*Area is required</p> }
                    {errors.area?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="descriptionproblem"><span>Description of the Problem: </span></label>
                    <textarea type="text" name='descriptionproblem' className='area-description' rows={4} {...register('descriptionproblem',
                    {
                        required:true,
                        maxLength: 2000
                    }) 
                    }/>
                    { errors.descriptionproblem?.type === 'required' && <p className='text-danger small'>*Description of the Problem is required</p> }
                    {errors.descriptionproblem?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="areasupervisor"><span>Area Supervisor:</span></label>
                    <input type="text" name='areasupervisor' className='input-order' disabled={ params.id? 'disabled': ''}  {...register('areasupervisor',
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

                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="machine"><span>Machine:</span></label>
                    <input type="text" name='machine' className='input-order' disabled={ params.id? 'disabled': ''}  {...register('machine',
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
                    <div className='input-row2 col-5 col-sm-3'>
                        <label htmlFor="requirementdate"><span>Requirement Date:</span></label>
                        <input type="text" name='requirementdate' className='input-order' 
                        defaultValue={ new Date ().toLocaleDateString() } disabled />
                    </div>
                    :
                    <div className='input-row2 col-5 col-sm-3'>
                        <label htmlFor="requirementdate"><span>Requirement Date:</span></label>
                        <input type='date' name='requirementdate' className='input-order'
                            {...register('requirementdate',
                                {
                                    required:true
                                }) 
                            }/>
                        { errors.requirementdate?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                    </div>
                }
                
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="activity"><span>Maintenance Activity:</span></label>
                    <input type="text" name='activity' className='input-order' {...register('activity',
                    {
                        required:true,
                        maxLength: 300
                    }) 
                    }/>
                    { errors.activity?.type === 'required' && <p className='text-danger small'>*Maintenance Activity is required</p> }
                    {errors.activity?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>  
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-5'>
                    <label htmlFor="createby"><span>Create by:</span></label>
                    <select className="col-12 select-tech"  {...register("createby",
                    {
                        required:true,
                    })
                    } >
                        <option value="">-- Select Leader --</option>
                        {
                            ListLeader.map(u => <option className='option-tech' key={u._id} value={u._id} > { u.names } { u.lastnames }</option>)
                        }
                    </select>
                    { errors.asignateto?.type === 'required' && <p className='text-danger small'>*Asigned to is required</p> }
                </div>
                
                <div className='input-row2 col-12 col-sm-5'>
                    <label htmlFor="asignateto"><span>Assigned to:</span></label>
                    <select className="col-12 select-tech"  {...register("asignateto",
                    {
                        required:true,
                    })
                    } >
                        <option value="">-- Select Technician --</option>
                        {
                            ListTechnician.map(u => <option className='option-tech' key={u._id} value={u._id} > { u.names } { u.lastnames } -  { u.position } </option>)
                        }
                    </select>
                    { errors.asignateto?.type === 'required' && <p className='text-danger small'>*Asigned to is required</p> }
                </div>

            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="startdate"><span>Start Date:</span></label>
                    <input type="date" name='startdate' className='input-order' {...register('startdate',
                    {
                        required:true
                    }) 
                    }/>
                    { errors.startdate?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                </div>

                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="enddate"><span>End Date:</span></label>
                    <input type="date" name='enddate' className='input-order' {...register('enddate')} />
                </div>
            </div>

            <br></br>
            
            <div className='form-line'>
                <div className='input-row2 col-12 '>
                    <label htmlFor="spareparts"><span>Spare parts and special tools needed: </span></label>
                    <textarea type="text" name='spareparts' className='area-description'  rows={4} {...register('spareparts',
                    {
                        maxLength: 2000
                    }) 
                    }/>
                    {errors.spareparts?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>
            </div>

            <div className='form-group col-4 py-1'>
                <ButtonComp type='submit' className='btn-submit' >CREATE</ButtonComp>
            </div>
                 
        </form>               
    </div>
  )
}