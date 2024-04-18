import { CommonInput } from '@components/input/Input.style';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ type = 'text', size = 'full', id, placeholder, ...rest }, ref) => {
    return (
      <CommonInput
        ref={ref}
        id={id}
        type={type}
        size={size}
        {...rest}
        placeholder={placeholder}
      />
    );
  },
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
