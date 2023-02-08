import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './order.scss'
import ButtonComp from '../common/button/ButtonComp';
import { finishOrder, getByOrderNumber } from '../../api/ApiOrders';


export default function OrderDetail() {

    const params = useParams();
    const navigate = useNavigate();
    const { ordernumber }= params

    const [status, setStatus] = useState('');
    const [ data, setData ] = useState({})
    const [enddate, setEnddate] = useState();
    const [spareparts, setSpareparts] = useState('');

    // const [priority, setPriority] = useState('');
    // const [requestby, setRequestby] = useState('');
    // const [area, setArea] = useState('');
    // const [descriptionproblem, setDescriptionProblem] = useState('');
    // const [areasupervisor, setAreaSupervisor] = useState('');
    // const [machine, setMachine] = useState('');
    // const [requirementdate, setRequirementdate] = useState('');
    
    // const [activity, setActivity] = useState('');
   
    // const [createby, setCreateby] = useState('');
    // const [ordercreationdate, setOrdercreationdate] = useState('');
    // const [asignateto, setAsignateto] = useState('');
    // const [code, setCode] = useState('');
    // const [startdate, setStartdate] = useState('');
    
    // const [comments, setComments] = useState('');

    const finish =(e)=>{
        e.preventDefault()
        const status = 'finalized'
        const newData = {
            ...data, status, spareparts,
            enddate
        }
        finishOrder(newData)
            .then((res)=> {
                alert(res.msj)
                navigate(-1)
            })
    }

    // const data = {
    //     priority, requestby, area, machine, areasupervisor, code, asignateto, startdate, enddate, comments,
    //     ordercreationdate, status, activity, createby, requirementdate, spareparts, ordernumber, descriptionproblem
    // }

    useEffect(() => {
        getByOrderNumber(ordernumber)
            .then((res) => {
                setData(res.data)
                setEnddate(res.data.enddate)
                setStatus(res.data.status)
                setSpareparts(res.data.spareparts)

                // setPriority(res.data.priority)
                // setRequestby(res.data.requestby)
                // setArea(res.data.area)
                // setMachine(res.data.machine)
                // setAreaSupervisor(res.data.areasupervisor)
                // setCode(res.data.code)
                // setAsignateto(res.data.asignateto)
                // setStartdate(res.data.startdate)
                // setComments(res.data.comments)
                // setOrdercreationdate(res.data.ordercreationdate)
                // setActivity(res.data.activity)
                // setCreateby(res.data.createby)
                // setRequirementdate(res.data.requirementdate)
                // setDescriptionProblem(res.data.descriptionproblem)   
            })
    }, [ordernumber]);

  return (
    <div className='container comp-order'>
        
        <form  className='form-order' onSubmit={ finish }>
            <legend>Maintenance Order</legend>
            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="ordernumber"><span>Order n°</span></label>
                    <input type="text" name='ordernumber' className='input-order' defaultValue={ ordernumber } disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="priority"><span>Priority</span></label>
                    <input type="text" name='priority' className='input-order' defaultValue={ data.priority } disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-md-8'>
                    <label htmlFor="requestby"><span>Request by:</span></label>
                    <input type="text" name='requestby' className='input-order' defaultValue={ data.requestby } disabled />
                </div>
                <div className='input-row2 col-12 col-md-3'>
                    <label htmlFor="area"><span>Area:</span></label>
                    <input type="text" name='area' className='input-order' defaultValue={ data.area } disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="descriptionproblem"><span>Description of the Problem: </span></label>
                    <textarea type="text" name='descriptionproblem' className='area-description'  rows={4} defaultValue={ data.descriptionproblem } disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="areasupervisor"><span>Area Supervisor:</span></label>
                    <input type="text" name='areasupervisor' className='input-order' defaultValue={ data.areasupervisor }  disabled />
                </div>
                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="machine"><span>Machine:</span></label>
                    <input type="text" name='machine' className='input-order' defaultValue={ data.machine } disabled />
                </div>
                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="requirementdate"><span>Requirement Date:</span></label>
                    <input type="text" name='requirementdate' className='input-order' 
                    value={ new Date (data.requirementdate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) } disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 '>
                    <label htmlFor="spareparts"><span>Spare parts and special tools needed: </span></label>
                    <textarea type="text" name='spareparts' className='area-description'  rows={4} value={ spareparts } 
                    onChange={ (e)=> setSpareparts(e.target.value)} />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="activity"><span>Maintenance Activity:</span></label>
                    <input type="text" name='activity' className='input-order' defaultValue={ data.activity }  disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="status"><span>Status:</span></label>
                    <input type="text" name='status' className='input-order' defaultValue={ status }  disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="createby"><span>Create by:</span></label>
                    <input type="text" name='createby' className='input-order' defaultValue={ data.createby } disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="ordercreationdate"><span>Order Creation Date:</span></label>
                    <input type="text" name='ordercreationdate' className='input-order' 
                    value={ new Date (data.ordercreationdate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) }  disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="asignateto"><span>Assigned to:</span></label>
                    <input type="text" name='asignateto' className='input-order' defaultValue={ data.asignateto } disabled />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="code"><span>Code Employee:</span></label>
                    <input type="text" name='code' className='input-order' defaultValue={ data.code } disabled />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="startdate"><span>Start Date:</span></label>
                    <input type="text" name='startdate' className='input-order' 
                    value={ new Date (data.startdate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) } disabled />
                </div>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="enddate"><span>End Date:</span></label>
                    <input type="date" name='enddate' className='input-order' 
                    value={ new Date (enddate).toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}) } onChange={ (e)=> console.log(e.target.value)} />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="comments"><span>Comments: </span></label>
                    <textarea type="text" name='comments' className='area-description' rows={4} defaultValue={ data.comments } />
                </div>
            </div>

            <div className='form-group col-4 py-1'>
                <ButtonComp type='submit' className='btn-submit'>Finalize</ButtonComp>
            </div>
                 
        </form>           
        
    </div>
   
  )
}
