import Button from '@components/button/Button';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <ErrorWrapper>
        <TextError>
          <ErrorTitle>알 수 없는 오류가 발생했어요.</ErrorTitle>
          <ErrorDescription>
            죄송합니다. 요청을 처리하지 못했어요.
            <br />
            잠시 뒤에 다시 시도해 주세요.
          </ErrorDescription>
          <Button size="full" bgColor="primary" handleClick={handleBack}>
            뒤로 가기
          </Button>
        </TextError>
        <ImageError>
          <ImgError
            src="/src/assets/images/image-error.png"
            alt="오류 이미지"
          />
        </ImageError>
      </ErrorWrapper>
    </>
  );
}

export default ErrorPage;
