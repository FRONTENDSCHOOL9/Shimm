import { CommonInput } from '@components/input/Input.style';
import PropTypes from 'prop-types';

function Input({
  type = 'text',
  size = 'full',
  id,
  placeholder,
  title,
  ...rest
}) {
  return (
    <CommonInput
      id={id}
      type={type}
      size={size}
      placeholder={placeholder}
      title={title}
      {...rest}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default Input;
