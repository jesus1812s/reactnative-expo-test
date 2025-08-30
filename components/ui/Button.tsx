import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  let buttonClasses = 'rounded-lg items-center justify-center ';
  
  if (variant === 'primary') {
    buttonClasses += 'bg-buttons-primary ';
  } else {
    buttonClasses += 'bg-buttons-secondary border ';
  }
  
  if (size === 'sm') {
    buttonClasses += 'px-3 py-2 ';
  } else if (size === 'lg') {
    buttonClasses += 'px-6 py-4 ';
  } else {
    buttonClasses += 'px-4 py-3 ';
  }
  
  if (disabled) {
    buttonClasses += 'opacity-50 ';
  }
  
  // Clases personalizadas
  buttonClasses += className;
  
  let textClasses = 'font-inter font-semibold ';
   
  if (size === 'sm') {
    textClasses += 'text-sm';
  } else if (size === 'lg') {
    textClasses += 'text-lg';
  } else {
    textClasses += 'text-base';
  }
  
  return (
    <TouchableOpacity
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      <Text className={textClasses}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
export type { ButtonProps };