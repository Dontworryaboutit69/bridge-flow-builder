
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
};

const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  className = '',
  type = 'button',
  onClick,
  href,
  target,
  rel,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 relative';
  
  const variantStyles = {
    primary: 'bg-[#0056db] text-white hover:bg-[#0049c2] shadow-sm',
    secondary: 'bg-funding-light-gray text-funding-dark hover:bg-funding-light-gray/80',
    outline: 'bg-transparent border border-[#0056db] text-[#0056db] hover:bg-[#0056db]/5',
    ghost: 'bg-transparent text-[#0056db] hover:bg-[#0056db]/5',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-2 rounded-md',
    md: 'px-6 py-2.5 text-base rounded-md',
    lg: 'px-8 py-3 text-base rounded-md',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    disabledStyles,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        onClick={onClick}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default CustomButton;
