import { CommonInput } from '@components/input/Input.style';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ type = 'text', size = 'full', id, placeholder, title, ...rest }, ref) => {
    return (
      <CommonInput
        ref={ref}
        id={id}
        type={type}
        size={size}
        placeholder={placeholder}
        title={title}
        {...rest}
      />
    );
  },
);

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
};

export default Input;
