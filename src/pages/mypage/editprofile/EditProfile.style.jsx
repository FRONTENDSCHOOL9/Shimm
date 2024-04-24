import styled from 'styled-components';

export const FormSection = styled.section`
  flex-grow: 1;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  transition: all 5s ease-in-out;

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 500px;
  }
`;

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 2px;
    height: 40px;
    border-radius: 20px;
    margin-top: 20px;

    & input {
      display: none;
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
  }
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;

  & img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

export const StyledNickName = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 20px;

  & label {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Password = styled.div``;

export const PasswordOption = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  & p {
    font-size: 1.4rem;
    font-weight: 500;
  }
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
  margin-bottom: 20px;

  & label {
    display: block;
    margin-bottom: 8px;
  }
`;

export const StyledBirth = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 20px;

  & label {
    display: block;
    margin-bottom: 8px;
  }
`;

export const StyledPhoneNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 30px;

  & label {
    display: block;
    margin-bottom: 8px;
  }
`;
