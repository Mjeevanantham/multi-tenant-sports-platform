import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export default function Input({ 
  label, 
  icon, 
  className = '', 
  value,
  onChange,
  ...props 
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full px-4 py-2 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            ${icon ? 'pl-10' : ''}
            ${className}
          `}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
}

