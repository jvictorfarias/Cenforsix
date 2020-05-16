import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

const Input = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);

    // truthy
    // falsy

    setIsFilled(!!inputRef.current.value);
  }

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={error}>
      <Icon size={20} />
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};
