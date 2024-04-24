import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  padding: 0 2.8em;
  margin-bottom: 30px;

  > button {
    margin: 10px 0;
    font-size: 1.5rem;
    width: 100%;
  }

  @media (min-width: 740px) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto 30px;
  }
`;

export const SignUpTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
  margin: 20px 0;
`;

export const Stepper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  color: #a1a1a1;
  margin: 30px 0;

  & li {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  & li:first-child {
    order: 1;
  }

  & li:last-child {
    order: 3;
  }

  &:after {
    content: '';
    display: block;
    width: 13%;
    height: 1px;
    background-color: #b1b1b1;
    order: 2;
  }
`;

export const Step = styled.li`
  text-align: right;
  padding-left: 10px;
  width: fit-content;
`;

export const CurrentStep = styled(Step)`
  width: 140px;
  color: #333;
  border-radius: 25px;
  height: 50px;
  line-height: 50px;
  background-color: #f6f6f6;
  text-align: center;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const FlexContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  width: 10%;
`;

export const ErrorMessge = styled.p`
  color: #e10000;
  margin: 10px 0;
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

export const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export const AddImageButton = styled(InputLabel)`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(51, 86, 53, 1);
  color: #fff;
  border-radius: 25px;
  font-weight: 300;
  transition: all 0.3s ease-out;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    background-color: rgba(85, 162, 90, 1);
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px auto;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const DeleteIcon = styled.img`
  width: auto;
  height: 50px;
`;
