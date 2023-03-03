import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './order.scss'
import ButtonComp from '../common/button/ButtonComp';
import { finishOrder, getOrderById } from '../../api/ApiOrders';
import { useForm } from 'react-hook-form';


export default function OrderDetail() {

   
    const params = useParams();
    const navigate = useNavigate();

    const [ createby, setCreateby ] = useState('')
    const [ asignateto, setAsignateto ] = useState('')
    const [ code, setCode ] = useState('')
    const [ data, setData ] = useState({})

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: data
    });

    const finish =(data)=> {
        const orderstatus = 'finalized'
        const newData = {
            ...data, orderstatus
        }
        finishOrder(newData)
            .then((res)=> {
                alert(res.msj)
                navigate(-1)
            })
            .catch(error=> console.log(error))
    }


    useEffect(() => {
        getOrderById(params.id)
            .then((res) => {
                const userInfo = res.data.userAssigneto
                const asignateto = `${ userInfo.names } ${ userInfo.lastnames } - [ ${ userInfo.position } ]`
                const usercreateby = res.data.createby
                const createby = `${ usercreateby.names } ${ usercreateby.lastnames }`
                setAsignateto(asignateto)
                setCreateby(createby)
                setCode(userInfo.code)
                setData(res.data.order)
                reset(res.data.order)
            
            })
            .catch(error => console.log(error))
    }, [params.id, reset]);


  return (
    <div className='container comp-order'>
        
        <form  className='form-order' onSubmit={ handleSubmit(finish) }>
            <legend>Maintenance Order</legend>
            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="ordernumber"><span>Order n°</span></label>
                    <input type="text" name='ordernumber' className='input-order'  {...register("ordernumber")} disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="priority"><span>Priority</span></label>
                    <input type="text" name='priority' className='input-order'  {...register("priority")} disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-md-8'>
                    <label htmlFor="requestby"><span>Request by:</span></label>
                    <input type="text" name='requestby' className='input-order'   {...register('requestby')} disabled />
                </div>
                <div className='input-row2 col-12 col-md-3'>
                    <label htmlFor="area"><span>Area:</span></label>
                    <input type="text" name='area' className='input-order' {...register('area')} disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="descriptionproblem"><span>Description of the Problem: </span></label>
                    <textarea type="text" name='descriptionproblem' className='area-description'  rows={4} {...register('descriptionproblem')} disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="areasupervisor"><span>Area Supervisor:</span></label>
                    <input type="text" name='areasupervisor' className='input-order' {...register('areasupervisor')}  disabled />
                </div>
                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="machine"><span>Machine:</span></label>
                    <input type="text" name='machine' className='input-order' {...register('machine')} disabled />
                </div>
                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="requirementdate"><span>Requirement Date:</span></label>
                    <input type="text" name='requirementdate' className='input-order' 
                    value={ new Date (data.requirementdate).toLocaleDateString() } disabled />
                </div>
            </div>

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

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="activity"><span>Maintenance Activity:</span></label>
                    <input type="text" name='activity' className='input-order' {...register('activity')}  disabled />
                </div>
                
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-5'>
                    <label htmlFor="createby"><span>Create by:</span></label>
                    <input type="text" name='createby' className='input-order' defaultValue={ createby } disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="ordercreationdate"><span>Order Creation Date:</span></label>
                    <input type="text" name='ordercreationdate' className='input-order' 
                    value={ new Date (data.ordercreationdate).toLocaleDateString() }  disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="orderstatus"><span>Status:</span></label>
                    <input type="text" name='orderstatus' className='input-order' {...register('orderstatus')}  disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="asignateto"><span>Assigned to:</span></label>
                    <input type="text" name='asignateto' className='input-order' defaultValue={ asignateto } disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="code"><span>Code Employee:</span></label>
                    <input type="text" name='code' className='input-order' defaultValue={ code } disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="startdate"><span>Start Date:</span></label>
                    <input type="text" name='startdate' className='input-order'
                    value={ new Date (data.startdate).toLocaleDateString() } disabled />
                </div>
                {
                    data.enddate?
                    <div className='input-row2 col-5 col-sm-3'>
                        <label htmlFor="enddate"><span>End Date:</span></label>
                        <input type="text" name='enddate' className='input-order' 
                        defaultValue={ new Date (data.enddate).toLocaleDateString() } disabled />
                    </div>
                    :
                    <div className='input-row2 col-5 col-sm-3'>
                        <label htmlFor="enddate"><span>End Date:</span></label>
                        <input type='date' name='enddate' className='input-order'
                            {...register('enddate',
                                {
                                    required:true
                                }) 
                            }/>
                        { errors.enddate?.type === 'required' && <p className='text-danger small'>*Date is required</p> }
                    </div>
                }
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="comments"><span>Comments: </span></label>
                    <textarea type="text" name='comments' className='area-description' rows={4} {...register('comments',
                        {
                            maxLength: 2000
                        }) 
                        }/>
                        {errors.comments?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                </div>
            </div>
           
            <div className='form-group col-4 py-1'>
                {
                    data.orderstatus !=='finalized'?
                        <ButtonComp type='submit' className='btn-submit'>Finalize</ButtonComp>
                        :
                    null
                }
            </div>
               
        </form>           
    </div>
   
  )
}
