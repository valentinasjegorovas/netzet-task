import React, { ReactNode, FC } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className="
    bg-green 
    text-white 
    uppercase 
    border-none 
    font-extrabold 
    text-[18px] 
    px-[137px] 
    py-[14px] 
    rounded-md 
    mobile:px-[105px]
    mobile:py-[10px] 
    mobile:text-[14px]"
    >
      {children}
    </button>
  );
};

export default Button;
