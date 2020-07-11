import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { SelectRole, Role } from './styles';

const Radio = ({ name, options, ...rest }) => {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find((ref) => ref.checked);

        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find((ref) => ref.value === value);

        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <SelectRole>
      {options.map((option, index) => (
        <Role key={option.id}>
          <input
            ref={(elRef) => (inputRefs.current[index] = elRef)}
            type="radio"
            name={fieldName}
            value={option.id}
            defaultChecked={defaultValue === option.id}
            {...rest}
          />
          <span>{option.label}</span>
        </Role>
      ))}
    </SelectRole>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Radio;
