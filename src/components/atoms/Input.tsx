import { ErrorMessage, Field } from 'formik';
import { ReactNode } from 'react';

interface Props {
  name: string;
  component?: string;
  label: string;
  placeholder?: string;
  type?: string;
  children?: ReactNode;
}

const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  component,
}: Props) => (
  <div className='mb-4 flex flex-col'>
    <label htmlFor={name} className='mb-2 block text-xs text-gray-400'>
      {label}
    </label>
    <Field
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      component={component}
      className='w-full flex-1 border-none bg-gray-800 px-2 py-1 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
    />
    <ErrorMessage
      name={name}
      component='div'
      className='text-sm text-red-400'
    />
  </div>
);

export default Input;
