import React from 'react';

interface IInputField {
  type?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<IInputField> = ({
  type = 'text',
  value,
  onChange,
}) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default InputField;
