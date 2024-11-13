// components/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'default' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size='default', children, className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 font-semibold rounded focus:outline-none focus:ring-2';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-red-500 text-white hover:bg-blue-600 focus:ring-blue-400',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
    outline: 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white focus:ring-teal-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    default: 'h-[44px] px-6',
    md: 'h-[48px] px-6',
    lg: 'h-[56px] px-8 text-sm uppercase tracking'
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
