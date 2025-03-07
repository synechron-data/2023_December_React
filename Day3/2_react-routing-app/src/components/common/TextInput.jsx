import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, placeholder, value, readOnly, onChange}) => {
    return (
        <div className="form-group mb-1">
            <label className="mb-0" htmlFor={name}>{label}</label>
            <input type="text" className="form-control" id={name} name={name} 
                placeholder={placeholder} readOnly={readOnly}
                value={value} onChange={onChange} />
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any.isRequired,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
};

export default TextInput;