import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ButtonComp from '../common/button/ButtonComp';
import { getOrderById, updateOrder } from '../../api/ApiOrders'
import './order.scss'
import { useForm } from 'react-hook-form';
import { AppContext } from '../../context/UserProvider';


const Order = () => {

    const [ data, setData ] = useState([]);
    const [ asignateto, setAsignateto ] = useState('')
    const [ createby, setCreateby ] = useState('')
    const [ isChecked, setIsChecked ] = useState(data.orderstatus)
    const [ code, setCode ] = useState('')
    const params = useParams()
    const navigate = useNavigate()
    const { role } = useContext(AppContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: data
    });

    
    const onSubmit =(data)=> {
        const orderstatus = (isChecked === 'yes' || data.orderstatus === 'executed' )? 'executed': 'pending'
        const newData = {...data, orderstatus}
        updateOrder(newData)
            .then((res)=>{
                navigate(-1)
                alert(res.msj) 
            })
            .catch(error => console.log(error))
    }

    useEffect(()=>{
        getOrderById(params.id)
            .then((res)=>{
                
                const userInfo = res.data.userAssigneto
                const asignateto = `${ userInfo.names } ${ userInfo.lastnames }`
                const usercreateby = res.data.createby
                const createby = `${ usercreateby.names } ${ usercreateby.lastnames }`
                setAsignateto(asignateto)
                setCreateby(createby)
                setCode(userInfo.code)
                setData(res.data.order)
                reset(res.data.order)
            })
            .catch(error => console.log(error))
    },[params.id, reset])

    return (

            <div className='container comp-order'>

                <form  className='form-order' onSubmit={ handleSubmit( onSubmit )}>
                    <legend>Maintenance work Order</legend>
                    <div className='form-line'>
                        <div className='input-row2 col-12 col-sm-3'>
                            <label htmlFor="ordernumber"><span>Order n°</span></label>
                            <input type="text" name='ordernumber' className='input-order' 
                            {...register("ordernumber")} disabled />
                        </div>
                        <div className='input-row2 col-12 col-sm-3'>
                            <label htmlFor="priority"><span>Priority</span></label>
                            <input type="text" name='priority' className='input-order' 
                            {...register("priority")} disabled />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12 col-md-8'>
                            <label htmlFor="requestby"><span>Request by:</span></label>
                            <input type="text" name='requestby' className='input-order'
                             {...register('requestby')} disabled/>
                        </div>

                        <div className='input-row2 col-12 col-md-3'>
                            <label htmlFor="area"><span>Area:</span></label>
                            <input type="text" name='area' className='input-order' {...register('area')}
                             defaultValue={ data.area } disabled/>
                        </div>
                    </div>

                     <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="activity"><span>Maintenance Activity:</span></label>
                            <input type="text" name='activity' className='input-order' {...register('activity')}
                            defaultValue={ data.activity } readOnly />
                        </div>  
                    </div>
                    
                    <div className='form-line'>
                        <div className='input-row2 col-12 col-sm-5'>
                            <label htmlFor="createby"><span>Create by:</span></label>
                            <input type="text" name='createby' className='input-order'
                            defaultValue={ createby } disabled
                            />
                        </div>
                         <div className='input-row2 col-12 col-sm-3'>
                            <label htmlFor="ordercreationdate"><span>Order Creation Date:</span></label>
                            <input type="text" name='ordercreationdate' className='input-order' 
                            value={ new Date (data.ordercreationdate).toLocaleDateString() } disabled />
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
                                    {...register('enddate')} />
                            </div>
                        }
                    </div>

                    <div className='form-line check-tools'>
                        <label>Maintenance was done:</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                            value='yes' checked={ data.orderstatus !== 'pending' || isChecked === 'yes'} onChange={ e => setIsChecked(e.target.value)} 
                                disabled ={ data.orderstatus === 'finalized'? 'disabled': '' }
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                            value='no' checked={ data.orderstatus === 'pending'} onChange={ e => setIsChecked(e.target.value)} 
                                disabled ={ data.orderstatus === 'finalized'? 'disabled': '' }
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12 '>
                            <label htmlFor="spareparts"><span>Spare parts and special tools needed: </span></label>
                            <textarea type="text" name='spareparts' className='area-description' rows={4} {...register('spareparts',
                            {
                                maxLength: 2000
                            }) 
                            }/>
                            {errors.spareparts?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="comments"><span>Comments: </span></label>
                            <textarea type="text" name='comments' className='area-description' rows={4} {...register('comments',
                            {
                                maxLength: 2000,
                                required: true
                            }) 
                            }/>
                            {errors.comments?.type === "maxLength" && <p className='text-danger small'>*Max length exceeded</p> }
                            {errors.comments?.type === "required" && <p className='text-danger small'>*Comments is Required</p> }
                        </div>
                    </div>
                    
                    {
                        (data.orderstatus === 'finalized' || role !== 'technician')?
                        null
                        :
                        <div className='form-group col-4 py-1'>
                            <ButtonComp type='submit' className='btn-submit' >SEND</ButtonComp>
                        </div>
                    }    
                </form>           

            </div>

    );
}

export default Order;
