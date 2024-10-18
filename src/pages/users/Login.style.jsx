import styled from 'styled-components';

export const LoginWrapper = styled.div`
  padding: 0 2.8em;

  & button {
    margin: 10px 0;
    font-size: 1.5rem;
    width: 100%;
  }

  @media (min-width: 740px) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
  margin: 20px 0;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const ErrorMessage = styled.p`
  color: #e10000;
  margin: 5px 0%;
  font-size: 1.4rem;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  color: #8e8e8e;
  margin: 20px 0;

  &:before {
    content: '';
    display: block;
    width: 100%;
    max-width: 35%;
    height: 1px;
    background-color: #d9d9d9;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    max-width: 35%;
    height: 1px;
    background-color: #d9d9d9;
  }
`;
