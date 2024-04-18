import { CommonInput } from '@components/input/Input.style';
import PropTypes from 'prop-types';

function Input({ type = 'text', size = 'full', id, placeholder, ...rest }) {
  return (
    <CommonInput
      id={id}
      type={type}
      size={size}
      {...rest}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
