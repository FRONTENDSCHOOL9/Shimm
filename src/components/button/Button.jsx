import { CommonButton } from '@components/button/Button.style';
import PropTypes from 'prop-types';

function Button({
  children,
  type = 'button',
  size,
  bgColor = 'primary',
  color,
  display = 'inline',
  handleClick,
}) {
  return (
    <CommonButton
      type={type}
      size={size}
      $bg={bgColor}
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
  size: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  handleClick: PropTypes.func,
  round: PropTypes.bool,
};

export default Button;
