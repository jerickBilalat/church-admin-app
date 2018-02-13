import React from 'react';

const TextInput = ({name, label, value, onChange }) => {
    return (
        <div className="input-field col s6">
            <input
                name={name}
                value={value}
                onChange={onChange} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default TextInput;