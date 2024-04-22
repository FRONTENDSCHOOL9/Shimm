import Button from '@components/button/Button';
import styled from 'styled-components';

export const FeedForm = styled.form``;

export const TextContent = styled.div`
  margin-bottom: 20px;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #e6f2e7;
    border-radius: 5px;
  }

  & textarea {
    aspect-ratio: 5/2;
    width: 100%;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px #55a25a;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.4rem;
    font-weight: 300;
    color: #545956;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 200;
    color: #f00;
    margin-top: 8px;
  }

  @media (min-width: 740px) {
    margin-bottom: 30px;
  }
`;

export const FileContent = styled.div`
  margin-bottom: 30px;
  color: #0a0b0a;
  display: flex;
  align-items: start;
  gap: 7px;

  & img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1280px) {
    gap: 9px;
  }
`;

export const FileMain = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;

  & p:first-child {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & p:last-child {
    font-size: 1.2rem;
    font-weight: 300;
    color: #545956;
    word-break: break-all;
  }

  & label {
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 30px;
    border: 1px solid #cbcdcc;
    border-radius: 5px;
    padding: 6px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #0a0b0a;

    & span:first-child {
      font-size: 1.4rem;
      font-weight: 500;
    }

    & span:last-child {
      font-size: 1.4rem;
      font-weight: 300;
    }
  }

  & input {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  & p {
    flex-grow: 1;
  }
`;

export const DeleteButton = styled(Button)`
  margin-left: auto;
  margin-bottom: 10px;
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 6px;

  @media (min-width: 740px) {
    gap: 34px;
  }
`;
