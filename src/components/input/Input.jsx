import { CommonInput } from '@components/socail/SocialButton.style';
import PropTypes from 'prop-types';

function Input({
  children,
  type = 'text',
  size = 'full',
  handleClick,
}) {
  return (
    <CommonInput
      type={type}
      size={size}
      onClick={handleClick}
    >
      {children}
    </CommonInput>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Input;
