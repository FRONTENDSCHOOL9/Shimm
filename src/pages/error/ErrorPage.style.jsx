import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  background-color: #d4fdd8;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100vh;
  margin: -50px;

  @media (min-width: 1080px) {
    flex-direction: row;
  }

  @media (min-width: 740px) {
    margin: -110px;
  }
`;

export const TextError = styled.div`
  max-width: 300px;
`;

export const ErrorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;

  @media (min-width: 1080px) {
    font-size: 2.4rem;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 1.6rem;
  margin: 30px 0;
  line-height: 1.5;
`;

export const ImageError = styled.div`
  max-width: 300px;

  @media (min-width: 1080px) {
    max-width: 500px;
  }
`;

export const ImgError = styled.img`
  width: 100%;
  object-fit: cover;
`;
