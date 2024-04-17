import { SocialButton } from '@components/socail/SocialButton.style';
import PropTypes from 'prop-types';

function SocialButtons({
  children,
  type = 'button',
  bgColor = 'white',
  color,
  icons = 'white',
  handleClick,
}) {
  return (
    <SocialButton
      type={type}
      $bg={bgColor}
      color={color}
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
  color: PropTypes.string,
  icons: PropTypes.string,
  handleClick: PropTypes.func,
};

export default SocialButtons;
