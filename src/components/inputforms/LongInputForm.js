// Use for <textarea/> input elements

import React from 'react';
import PropTypes from 'prop-types';

const errorMessage = (error) => {
  if (error !== '') {
    return(
      <div className="errorMsg">{error}</div>
    )
  }
  return
}

const LongInputForm =(
  {className, placeholder, type, name, onChange, value, error}
)=>{
  return(
    <div >
    <div>{errorMessage(error)}</div>
    <div className="field">
      <textarea 
        className={className} 
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>

      
    </div>
  )
}

LongInputForm.propTypes = {
  type:        PropTypes.string.isRequired,
  name:        PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value:       PropTypes.string.isRequired,
  error:       PropTypes.string.isRequired,
  onChange:    PropTypes.func.isRequired,
}
export default LongInputForm;