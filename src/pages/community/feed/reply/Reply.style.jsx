import styled from 'styled-components';

export const ReplySection = styled.div`
  margin-bottom: 20px;
`;

export const ReplyContainer = styled.div`
  display: block;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: 740px) {
    display: flex;
    flex-wrap: nowrap;
    align-items: start;
    gap: 25px;
  }
`;

export const ReplyHeader = styled.div`
  min-width: 140px;
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font-size: 1.4rem;
    font-weight: 500;
    flex-shrink: 0;
  }
`;

export const ReplyTime = styled.p`
  flex-shrink: 0;
  font-size: 1.2rem;
  font-weight: 300;
  color: #727272;
`;

export const ReplyMain = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: start;
  gap: 25px;

  & p {
    padding-top: 15px;
    font-size: 1.4rem;
    flex-grow: 1;
    font-weight: 300;
  }

  @media (min-width: 740px) {
    padding-right: 55px;
    & p {
      padding-top: 6px;
    }
  }
`;

export const ReplyDelete = styled.div`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;

  & button {
    &:focus {
      box-shadow: inset 0 0 0 1px #55a25a;
      border-radius: 4px;
    }
  }
`;
