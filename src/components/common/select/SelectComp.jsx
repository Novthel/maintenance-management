import React from 'react';
import './selectComp.scss'

const SelectComp = () => {

    return (
        <select className="status-activity" id="select">
            <option  className='option-selected' selected>Status</option>
            <option  className='option-value' value="pending">Pending</option>
            <option  className='option-value' value="executed">Executed</option>
            <option  className='option-value' value="finalized">Finalized</option>
        </select>
    );
}

export default SelectComp;
