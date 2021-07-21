/* eslint-disable react/button-has-type */
interface Props {
  children: Node | string,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  style?: object,
  onClick?: () => void
}

const Button = ({
  children, type, disabled, ...rest
} : Props) => (
  <button
    className="rounded-sm px-2 py-1 focus:outline-none"
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
};

export default Button;
