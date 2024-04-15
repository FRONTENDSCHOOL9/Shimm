import {
  Text,
  Image,
  StyledDiv,
  StyledTitle,
  StyledDescription,
} from '@components/result/Result.style';
import iconGood from '@assets/images/icon-good.svg';

function Result({ width = 'wide', date, message }) {
  return (
    <StyledDiv width={width}>
      <Image src={iconGood} alt="Good" />
      <Text>
        <StyledTitle>{date}</StyledTitle>
        <StyledDescription>{message}</StyledDescription>
      </Text>
    </StyledDiv>
  );
}

export default Result;
