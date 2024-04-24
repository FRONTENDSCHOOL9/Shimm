import styled from 'styled-components';

export const StyledForm = styled.div`
  flex-grow: 1;
  position: relative;
  padding: 30px;
`;

export const FormWrapper = styled.div`
  flex-grow: 1;
  font-size: 1.4rem;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  transition: all 5s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 500px;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  & div {
    display: flex;
    gap: 2px;
    height: 40px;
    margin-left: 34px;
    border-radius: 20px;

    & img {
      margin-top: 12px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    & input {
      display: none;
    }
  }

  & label {
    cursor: pointer;
    background-color: #55a25a;
    border-radius: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 1.4rem;
    line-height: 4rem;
    font-weight: 300;
    color: #fff;
  }

  & label:hover {
    background-color: #335635;
  }
`;

export const StyledNickName = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Password = styled.div`
  margin-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const ChangePassword = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-block: 6px;
`;

export const Toggle = styled.div`
  & input {
    display: none;
  }

  & label {
    display: inline-block;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    position: relative;
    transition: 0.5s ease-out;
    margin-bottom: 2px;
  }

  & input:checked + label {
    background-color: #55a25a;
  }

  & label:after {
    content: '';
    width: 15px;
    height: 15px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    transition: 0.5s ease-out;
  }

  & input:checked + label:after {
    background-color: #55a25a;
    left: calc(100% - 18px);
    background-color: #fff;
  }
`;

export const PasswordInputs = styled.div`
  font-size: 1.4rem;
  font-weight: 500;

  & div {
    display: block;
    margin-bottom: 10px;
  }
`;

export const StyledBirth = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const StyledPhoneNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 20px;
`;
