import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef(
  ({ isValid, label, id, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ''  
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={inputRef}
        />
      </div>
    );
  }
);

export default Input;
