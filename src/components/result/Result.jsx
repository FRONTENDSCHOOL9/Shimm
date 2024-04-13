import {
  Text,
  Image,
  StyledDiv,
  StyledTitle,
  StyledDescription,
} from '@components/result/Result.style';

function Result({ width = 'wide', date, message }) {
  return (
    <StyledDiv width={width}>
      <Image src="/src/assets/icon-good.svg" alt="Good" />
      <Text>
        <StyledTitle>{date}</StyledTitle>
        <StyledDescription>{message}</StyledDescription>
      </Text>
    </StyledDiv>
  );
}

export default Result;
