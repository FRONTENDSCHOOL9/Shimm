import styled from 'styled-components';

export const Modal = styled.div`
  background-color: rgb(0 0 0 /0.8);
  position: fixed;
  inset: 0;
  padding: 0 45px;
  z-index: 9999;

  display: flex;
`;

export const Inside = styled.div`
  box-shadow: inset 0 0 20px lime;
  width: 100%;
  max-width: 250px;
  margin: auto;
  border-radius: 20px;
  overflow: hidden;
  font-size: 1.6rem;

  @media (min-width: 740px) {
    max-width: 450px;
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    max-width: 500px;
    font-size: 2.4rem;
  }
`;

export const Message = styled.div`
  background-color: #fff;
  padding: 60px;
`;

export const ModalClose = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.6rem;
  background-color: rgba(107, 177, 112, 1);
  text-align: center;
  color: #fff;

  @media (min-width: 740px) {
    height: 60px;
  }
`;

export const ModalOk = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.6rem;
  background-color: rgba(85, 162, 90, 1);
  text-align: center;
  color: #fff;

  @media (min-width: 740px) {
    height: 60px;
  }
`;
