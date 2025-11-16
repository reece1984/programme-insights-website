import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium inline-flex items-center justify-center gap-2 rounded-md transition-all duration-200 focus-visible:ring-accent';

  const variantStyles = {
    primary: 'bg-theme-accent text-white hover:bg-theme-accent shadow-sm hover:shadow-md',
    secondary: 'bg-transparent text-theme-primary border-2 border-theme-primary hover:bg-theme-primary hover:text-white'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',   // Small - for navbar
    md: 'px-8 py-4 text-base', // Medium - standard button (16px 32px)
    lg: 'px-10 py-5 text-lg'   // Large - hero CTAs
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
