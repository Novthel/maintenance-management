import './order.scss'
import ButtonComp from '../common/button/ButtonComp';
import { useForm } from "react-hook-form";
import { er } from '../../utils/RegularExpression';
import { newOrder } from '../../api/ApiOrders';
import { useEffect, useState } from 'react';
import { getUserByRole } from '../../api/ApiUsers.js';


export default function CreateOrder() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({});
    const [userList, setUserList] = useState([]);

    const onSubmit = data => {
        const ordercreationdate = new Date()
        const ordernumber = 0
        const newData = {
            ...data, ordercreationdate,
            ordernumber
        }
        console.log(newData)
        newOrder(newData)
            .then((res)=>{
                alert(res.msj) 
               reset()
            })
    }

    useEffect(()=>{
        getUserByRole('technician')
            .then(res => setUserList(res.data))
    },[])

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
                    <select className="priority col-5 col-sm-3" id="priority-order" {...register("priority")}>
                        <option  className='option-selected' value="Priority 1">Priority 1</option>
                        <option  className='option-value' value="Priority 2">Priority 2</option>
                        <option  className='option-value' value="Priority 3">Priority 3</option>
                    </select>
                </div>   
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-md-8'>
                    <label htmlFor="requestby"><span>Request by:</span></label>
                    <input type="text" name='requestby' className='input-order' {...register('requestby',
                    {
                        required:true,
                        pattern: er.text
                    }) 
                    }/>
                    { errors.requestby?.type === 'required' && <p className='text-danger small'>*Request by is required</p> }
                    { errors.requestby?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                </div>

                <div className='input-row2 col-12 col-md-3'>
                    <label htmlFor="area"><span>Area:</span></label>
                    <input type="text" name='area' className='input-order' {...register('area',
                    {
                        required:true
                    }) 
                    }/>
                    { errors.area?.type === 'required' && <p className='text-danger small'>*Area is required</p> }
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
                    <input type="text" name='areasupervisor' className='input-order' {...register('areasupervisor',
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
                    <input type="text" name='machine' className='input-order' {...register('machine',
                    {
                        required:true,
                        maxLength: 250
                    }) 
                    }/>
                    { errors.machine?.type === 'required' && <p className='text-danger small'>*Machine is required</p> }
                    {errors.machine?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>

                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="requirementdate"><span>Requirement Date:</span></label>
                    <input type="date" name='requirementdate' className='input-order' {...register('requirementdate',
                    {
                        required:true
                    }) 
                    }/>
                    { errors.requirementdate?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                </div>
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
                    <input type="text" name='createby' className='input-order' {...register('createby',
                    {
                        required:true,
                        pattern: er.text,
                        maxLength: 150
                    }) 
                    }/>
                    { errors.createby?.type === 'required' && <p className='text-danger small'>*Create by is required</p> }
                    { errors.createby?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.createby?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>
                
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="asignateto"><span>Assigned to:</span></label>
                    <select className="col-12"  {...register("asignateto")} >
                        <option value="">-- Seleccione --</option>
                        {
                            userList.map(u => <option key={u._id} value={u._id} >{ u.names } { u.lastnames }</option>)
                        }
                    </select>
                </div>

                {/* <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="ordercreationdate"><span>Order Creation Date:</span></label>
                    <input type="date" name='ordercreationdate' className='input-order' {...register('ordercreationdate',
                    {
                        required:true
                    }) 
                    }/>
                    { errors.ordercreationdate?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                </div> */}
            </div>

            {/* <div className='form-line'>
                <div className="select col-12">
                <label htmlFor="asignateto"><span>Assigned to:</span></label>
                    <select className="col-5 col-sm-3"  {...register("asignateto")} >
                        <option value="">-- Seleccione --</option>
                        {
                            userList.map(u => <option key={u._id} value={u._id} >{ u.names } { u.lastnames }</option>)
                        }
                    </select>
                </div>
            </div> */}

            {/* <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="asignateto"><span>Assigned to:</span></label>
                    <input type="text" name='asignateto' className='input-order' {...register('asignateto',
                    {
                        required:true,
                        pattern: er.text,
                        maxLength: 150
                    }) 
                    }/>
                    { errors.asignateto?.type === 'required' && <p className='text-danger small'>*Assigned to is required</p> }
                    { errors.asignateto?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * only lowercase, uppercase, accents, and spaces.
                    </p> }
                    {errors.asignateto?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div> 

                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="code"><span>Code Employee:</span></label>
                    <input type="text" name='code' className='input-order' {...register('code',
                    {
                        required:true,
                        pattern: er.code,
                        maxLength: 16,
                        minLength:2
                    }) 
                    }/>
                    { errors.code?.type === 'required' && <p className='text-danger small'>*Code is required</p> }
                    { errors.code?.type === 'pattern' && 
                    <p className='text-danger small'>
                        * lowercase letters, uppercase letters, numbers, underscore, and hyphen. code must be between 2 and 16 characters.
                    </p> }
                    {errors.code?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                    {errors.code?.type === "minLength" && <p className='text-danger small'>*Min length is 2 characters</p> }
                </div>
            </div> */}

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