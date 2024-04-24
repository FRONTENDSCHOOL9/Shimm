import iconGood from '@assets/images/icon-good.svg';
import {
  Image,
  StyledDescription,
  StyledDiv,
  StyledTitle,
  Text,
} from '@components/result/Result.style';

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
