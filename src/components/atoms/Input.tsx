import { HTMLProps, ReactNode } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
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
  ...inputProps
}: Props) => (
  <div className='mb-4 flex flex-col'>
    <label htmlFor={name} className='mb-2 block text-xs text-gray-400'>
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className='w-full flex-1 border-none bg-gray-800 px-2 py-1 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
      {...inputProps}
    />
  </div>
);

export default Input;
