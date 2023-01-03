import ButtonComp from '../common/button/ButtonComp';
import './order.scss'



const CreateOrder = () => {
    return (

            <div className='container comp-order'>

                <div className='sec-btn-finalize'>
                    <ButtonComp className='btn-send'>Create</ButtonComp>
                </div>

                <form  className='form-order' >
                    <legend>Maintenance work Order</legend>
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
                            <label htmlFor="maintenance-activity"><span>Maintenance Activity:</span></label>
                            <input type="text" name='maintenance-activity' className='input-order' />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12 col-sm-7'>
                            <label htmlFor="createBy"><span>Create by:</span></label>
                            <input type="text" name='createBy' className='input-order' />
                        </div>
                        <div className='input-row2 col-12 col-sm-4'>
                            <label htmlFor="order-creation-date"><span>Order Creation Date:</span></label>
                            <input type="date" name='order-creation-date' className='input-order' />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12 col-sm-4'>
                            <label htmlFor="assigned-order"><span>Assigned to:</span></label>
                            <input type="text" name='assigned-order' className='input-order' />
                        </div>
                        <div className='input-row2 col-5 col-sm-3'>
                            <label htmlFor="start-date"><span>Start Date:</span></label>
                            <input type="date" name='start-date' className='input-order' />
                        </div>
                        <div className='input-row2 col-5 col-sm-3'>
                            <label htmlFor="end-date"><span>End Date:</span></label>
                            <input type="date" name='end-date' className='input-order' />
                        </div>
                    </div>
                    <div className='form-line'>
                        <div className='check-tools'>
                            <label>Maintenance was done</label>
                            <label htmlFor="check-yes"><span>Yes</span></label>
                            <input type="checkbox" id="check-yes" name="check-yes" value="true" />
                            <label htmlFor="check-no"><span>No</span></label>
                            <input type="checkbox" id="check-no" name="check-no" value="true" />
                        </div>
                    </div> 

                    <div className='form-line'>
                        <div className='input-row col-12'>
                            <label htmlFor="verifiedby"><span>Verified and released by:</span></label>
                            <input type="text" name='verifiedby' className='input-order col-6' />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12 '>
                            <label htmlFor="spareParts"><span>Spare parts and special tools needed: </span></label>
                            <textarea type="text" name='spareParts' className='area-description'  rows={2} />
                        </div>
                    </div>

                    <div className='form-line'>
                        <div className='input-row2 col-12'>
                            <label htmlFor="comments-maintenance"><span>Comments: </span></label>
                            <textarea type="text" name='comments-maintenance' className='area-description' rows={2} />
                        </div>
                    </div>
                        
                </form>           

            </div>

    );
}

export default CreateOrder;
