import { StyledButton } from '@components/button/Button.style';

function Button({ children, type, color }) {
  return (
    <StyledButton type={type} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
