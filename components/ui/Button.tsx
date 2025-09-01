import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  textClassName = '',
  disabled,
  ...props
}) => {
  let buttonClasses = 'items-center justify-center ';
  
  if (!className.includes('rounded')) {
    buttonClasses += 'rounded-lg ';
  }
  
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
  
  buttonClasses += className;
  
  let textClasses = 'font-inter ';
  
  if (!textClassName.includes('font-')) {
    textClasses += 'font-semibold ';
  }
   
  if (!textClassName.includes('text-')) {
    if (size === 'sm') {
      textClasses += 'text-sm ';
    } else if (size === 'lg') {
      textClasses += 'text-lg ';
    } else {
      textClasses += 'text-base ';
    }
  }
  
  textClasses += textClassName;
  
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