/* eslint-disable react/button-has-type */
interface Props {
  children: Node | string | JSX.Element,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  style?: object,
  className?: string,
  onClick?: () => void
}

const Button = ({
  children, type, disabled, className, ...rest
} : Props) => (
  <button
    className={`rounded-sm px-2 py-2 lg:py-1 focus:outline-none ${className}`}
    type={type}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  style: {},
  disabled: false,
  className: '',
};

export default Button;
