import { SocialButton } from '@components/socialButton/SocialButton.style';
import PropTypes from 'prop-types';

function SocialButtons({
  children,
  type = 'button',
  bgColor = 'white',
  icons = 'white',
  handleClick,
}) {
  return (
    <SocialButton
      type={type}
      $bg={bgColor}
      onClick={handleClick}
      icons={icons}
    >
      {children}
    </SocialButton>
  );
}

SocialButtons.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  icons: PropTypes.string,
  handleClick: PropTypes.func,
};

export default SocialButtons;
