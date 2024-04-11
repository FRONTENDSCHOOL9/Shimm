import { CommonButton } from '@components/button/Button.style';
import PropTypes from 'prop-types';

function Button({
  children,
  type = 'button',
  color = 'primary',
  display = 'inline-block',
  handleClick,
}) {
  return (
    <CommonButton
      type={type}
      color={color}
      display={display}
      onClick={handleClick}
    >
      {children}
    </CommonButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
