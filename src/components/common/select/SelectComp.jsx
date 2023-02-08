import React from 'react';
import './selectComp.scss'

const SelectComp = ({ options, value, handleChange }) => {

    return (
        <label>
            <select value={ value } onChange={ handleChange }  className='status-activity' >
                {options.map((option) => (
                    <option key={ option.label } value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
}

export default SelectComp;
