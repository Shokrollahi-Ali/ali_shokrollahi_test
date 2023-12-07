import React from 'react';

interface IInputField {
  label?: string;
  type?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<IInputField> = ({
  label,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
};

export default InputField;
