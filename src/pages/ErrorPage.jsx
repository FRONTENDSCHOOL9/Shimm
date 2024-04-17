
import Button from "@components/button/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const ErrorWrapper = styled.div`
    background-color: #D4FDD8;
    margin-top: -110px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height:100vh;

    @media (min-width: 1080px) {
      flex-direction: row;
    }
  `

  const TextError = styled.div`
    max-width: 300px;
  `

  const ErrorTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;

    @media (min-width: 1080px) {
      font-size: 2.4rem;
    }
  `

  const ErrorDescription = styled.p`
    font-size: 1.6rem;
    margin: 30px 0;
    line-height: 1.5;
  `

  const ImageError = styled.div`
    max-width: 300px;

    @media (min-width: 1080px) {
      max-width: 500px;
    }
`

  const ImgError = styled.img`
    width: 100%;
    object-fit: cover;
  `

  function handleBack() {
    navigate(-1)
  }

  return (
    <>
    <ErrorWrapper>
        <TextError>
          <ErrorTitle>알 수 없는 오류가 발생했어요.</ErrorTitle>
          <ErrorDescription>죄송합니다. 요청을 처리하지 못했어요.<br/>잠시 뒤에 다시 시도해 주세요.</ErrorDescription>
          <Button size='full' bgColor='primary' handleClick={handleBack}>뒤로 가기</Button>
        </TextError>
        <ImageError>
          <ImgError src='/src/assets/images/image-error.png' alt='오류 이미지' />
        </ImageError>
      </ErrorWrapper>
    </>
  );
}

export default ErrorPage;
