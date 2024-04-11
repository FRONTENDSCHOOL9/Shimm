import {
  StyledDiv,
  StyledTitle,
  StyledDescription,
} from '@components/result/Result.style';

function Result({ width = 'wide', date, message }) {
  return (
    <StyledDiv width={width}>
      <StyledTitle>{date}</StyledTitle>
      <StyledDescription>{message}</StyledDescription>
    </StyledDiv>
  );
}

export default Result;
