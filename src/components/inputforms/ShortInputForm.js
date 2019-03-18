// use for <input/> elements

import React from 'react';
import PropTypes from 'prop-types';

const ShortInputForm = (
  { type, name, className, placeholder, onChange, value, error }
)=>{
  return(
    <div className="field">
    <input 
      className={className} 
      type={type} 
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    /> 
    </div>
  )
}

ShortInputForm.propTypes = {
  type:        PropTypes.string.isRequired,
  name:        PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value:       PropTypes.string.isRequired,
  error:       PropTypes.string.isRequired,
  onChange:    PropTypes.func.isRequired,
}

export default ShortInputForm;