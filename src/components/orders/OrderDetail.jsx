import './order.scss'
import ButtonComp from '../common/button/ButtonComp';

export default function OrderDetail() {


  return (
    <div className='container comp-order'>

        <div className='sec-btn-finalize'>
            <ButtonComp className='btn-send'>Finalize</ButtonComp>
        </div>

        <form  className='form-order' >
            <div className='form-line'>
                <div className='input-row col-12 col-sm-6'>
                    <label htmlFor="orderNumber"><span>Order n°</span></label>
                    <input type="number" name='orderNumber' className='input-order col-7' />
                </div>
                <div className='input-row col-12 col-sm-6'>
                    <label htmlFor="priority"><span>Priority</span></label>
                    <input type="text" name='priority' className='input-order col-8' />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-md-8'>
                    <label htmlFor="request"><span>Request by:</span></label>
                    <input type="text" name='request' className='input-order' />
                </div>
                <div className='input-row2 col-12 col-md-3'>
                    <label htmlFor="area-orderNumber"><span>Area:</span></label>
                    <input type="text" name='area-orderNumber' className='input-order' />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="DescriptionProblem"><span>Description of the Problem: </span></label>
                    <textarea type="text" name='DescriptionProblem' className='area-description' />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="area-supervisor"><span>Area Supervisor:</span></label>
                    <input type="text" name='area-supervisor' className='input-order' />
                </div>
                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="machine"><span>Machine:</span></label>
                    <input type="text" name='machine' className='input-order' />
                </div>
                <div className='input-row2 col-5 col-sm-3'>
                    <label htmlFor="requirement-date"><span>Requirement Date:</span></label>
                    <input type="date" name='requirement-date' className='input-order' />
                </div>
            </div>

            <div className='form-line'>
                <div className='check-tools'>
                    <input type="checkbox" id="check-tools" name="check-tools" value="true" />
                    <label htmlFor="check-tools"><span>Spare parts and special tools needed</span></label>
                </div>
            </div> 

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="maintenance-activity"><span>Maintenance Activity:</span></label>
                    <input type="text" name='maintenance-activity' className='input-order' />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="status"><span>Status:</span></label>
                    <input type="text" name='status' className='input-order' />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-8'>
                    <label htmlFor="createBy"><span>Create by:</span></label>
                    <input type="text" name='createBy' className='input-order' />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="order-creation-date"><span>Order Creation Date:</span></label>
                    <input type="date" name='order-creation-date' className='input-order' />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12 col-sm-4'>
                    <label htmlFor="responsible-order"><span>Responsible:</span></label>
                    <input type="text" name='responsible-order' className='input-order' />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="start-date"><span>Start Date:</span></label>
                    <input type="date" name='start-date' className='input-order' />
                </div>
                <div className='input-row2 col-12 col-sm-3'>
                    <label htmlFor="end-date"><span>End Date:</span></label>
                    <input type="date" name='end-date' className='input-order' />
                </div>
            </div>

            <div className='form-line'>
                <div className='input-row2 col-12'>
                    <label htmlFor="comments-maintenance"><span>Comments: </span></label>
                    <textarea type="text" name='comments-maintenance' className='area-description' />
                </div>
            </div>
                 
        </form>           
        
    </div>
   
  )
}
