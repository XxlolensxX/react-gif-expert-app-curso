import React, { useState } from "react";
import PropTypes from 'prop-types';

export const CategoryAdd = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('Escribe algo');
  
  const handleChangeValueInput = (event) => {
    setInputValue(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setCategories( cats => [inputValue, ...cats]);
    setInputValue('');
  }

  return (
    <form onSubmit={ handleOnSubmit }>   
      <input 
        type="text"
        value={inputValue}
        onChange={ handleChangeValueInput }
      />
    </form>
  )
}


CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}

