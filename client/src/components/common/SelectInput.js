import React from 'react';

const SelectInput = ({name, label, value, onChange, defaultOption, options}) => {
    return (
        <div className="input-field col s4">
            <select
                name={name}
                value={value}
                onChange={onChange}
                >
                    {options.map((option,index) => {
                        return <option key={(index + Math.random()).toPrecision(4).toString()} value={option.value}>{option.value}</option>;
                    })}
            </select>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default SelectInput;