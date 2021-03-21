import React, { HTMLAttributes } from 'react';
import { Button as ButtonContainer } from './styles';

const Button = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
