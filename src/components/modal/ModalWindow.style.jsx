import styled from 'styled-components';

export const Modal = styled.div`
  background-color: rgb(0 0 0 /0.8);
  font-weight: 500;
  position: fixed;
  inset: 0;
  padding: 0 45px;
  z-index: 9999;

  display: flex;
`;

export const Inside = styled.div`
  width: 100%;
  max-width: 250px;
  margin: auto;
  border-radius: 20px;
  overflow: hidden;
  font-size: 1.4rem;

  @media (min-width: 740px) {
    max-width: 450px;
    font-size: 1.6rem;
  }

  @media (min-width: 1280px) {
    max-width: 500px;
    font-size: 2rem;
  }
`;

export const Message = styled.div`
  font-size: 1.2rem;
  background-color: #fff;
  padding: 40px;

  @media (min-width: 740px) {
    font-size: 1.6rem;
  }
`;

export const ModalClose = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.6rem;
  background-color: rgba(107, 177, 112, 1);
  text-align: center;
  color: #fff;
  display: ${props => (props.$twoButton ? '' : 'none')};

  @media (min-width: 740px) {
    height: 60px;
  }
`;

export const ModalOk = styled.button`
  width: ${props => (props.$twoButton ? '50%' : '100%')};
  height: 50px;
  font-size: 1.6rem;
  background-color: rgba(85, 162, 90, 1);
  text-align: center;
  color: #fff;

  @media (min-width: 740px) {
    height: 60px;
  }
`;
