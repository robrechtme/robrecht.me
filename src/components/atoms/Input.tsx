import { ErrorMessage, Field } from 'formik';
import React from 'react';

type Props = {
  name: string;
  component?: string;
  label: string;
  placeholder?: string;
  type?: string;
};

const Input: React.FC<Props> = ({ name, label, placeholder, type = 'text', component }) => (
  <div className="mb-4 flex flex-col">
    <label htmlFor={name} className="block text-xs mb-2 text-gray-400">
      {label}
    </label>
    <Field
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      component={component}
      className="bg-gray-800 border-none w-full flex-1 placeholder-gray-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
    />
    <ErrorMessage name={name} component="div" className="text-sm text-red-400" />
  </div>
);

export default Input;
