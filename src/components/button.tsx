import React, {ButtonHTMLAttributes} from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children, disabled, className, ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`rounded-sm px-2 py-2 lg:py-1 focus:outline-none ${className}`}
    type="button"
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  style: {},
  disabled: false,
  className: '',
  children: null,
};

export default Button;
