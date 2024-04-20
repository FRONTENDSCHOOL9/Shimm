import { ButtonLink, MyInfoWrapper } from '@pages/mypage/MyInfo';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import iconbase from '@assets/images/icon-login.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ButtonProfileImg = styled.button`
  margin: 0 auto;
  width: 150px;
  height: 40px;
  background-color: #55a25a;
  border-radius: 25px;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #335633;
  }
`;

const ProfileImageInput = styled.input`
  display: none;
`;
const EditForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 20px 0 8px;
`;

const NicknameInput = styled.input`
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding-inline: 6px;
  box-sizing: border-box;
`;

const SelectBox = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;

  & select {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    box-sizing: border-box;
  }
`;

const ButtonProfileEdit = styled.button`
  margin-top: 35px;
  width: 100%;
  height: 40px;
  background-color: #55a25a;
  border-radius: 25px;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #335633;
  }
`;

const SelectNumber = styled.select`
  min-width: 80px;
`;

const MiddleNumber = styled.input`
  min-width: 60px;
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-sizing: border-box;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const LastNumber = styled.input`
  min-width: 60px;
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-sizing: border-box;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
function EditProfile() {
  const [userInput, setUserInput] = useState({
    nickName: '',
    password: '',
    passwordCheck: '',
    year: '',
    month: '',
    day: '',
  });
  const [profileImage, setProfileImage] = useState('');
  const profileImageInput = useRef(null);
  const { nickName, password, passwordCheck, year, month, day } = userInput;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const YEAR = Array.from({ length: 100 }, (_, i) => 1923 + i);
  const MONTH = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  );
  const DAY = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  );

  function handleImageChange(e) {
    e.stopPropagation();
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file.name);
    }
  }

  function onSubmit() {
    try {
      alert('프로필정보 변경이 완료되었습니다.');
    } catch {}
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  return (
    <MyInfoWrapper>
      <img src={iconbase} lt="기본프로필 사진" />
      <ButtonLink>
        <ButtonProfileImg
          type="button"
          onClick={() => profileImageInput.current.click()}
        >
          프로필 사진 추가하기
        </ButtonProfileImg>
      </ButtonLink>
      <ProfileImageInput
        type="file"
        id="profile-image"
        accept="image/*"
        ref={profileImageInput}
        onChange={handleImageChange}
      />
      <EditForm onSubmit={handleSubmit(onSubmit)}>
        <Label>닉네임</Label>
        <NicknameInput
          type="nickname"
          id="nickname"
          {...register('nickName')}
          placeholder="닉네임을 입력해 주세요."
        ></NicknameInput>

        <Label>비밀번호</Label>
        <NicknameInput
          type="password"
          id="password"
          {...register('password')}
          placeholder="소문자, 대문자, 특수문자를 조합하여 8자 이상 입력해 주세요."
        ></NicknameInput>

        <Label>비밀번호 확인</Label>
        <NicknameInput
          type="password"
          id="password"
          {...register('password')}
          placeholder="입력한 비밀번호 한번 더 입력해 주세요."
        ></NicknameInput>

        <Label>생년월일</Label>
        <SelectBox>
          <select className="select" name="year" onChange={handleInput}>
            <option>생년월일</option>
            {YEAR.map(y => {
              return <option key={y}>{y}</option>;
            })}
          </select>
          <select className="select" name="month" onChange={handleInput}>
            <option>월</option>
            {MONTH.map(m => {
              return <option key={m}>{m}</option>;
            })}
          </select>
          <select className="select" name="day" onChange={handleInput}>
            <option>일</option>
            {DAY.map(d => {
              return <option key={d}>{d}</option>;
            })}
          </select>
        </SelectBox>

        <Label>전화번호</Label>
        <SelectBox>
          <SelectNumber>
            <option>010</option>
          </SelectNumber>
          <MiddleNumber type="number" onChange={handleInput} />
          <LastNumber type="number" onChange={handleInput} />
        </SelectBox>
        <ButtonLink>
          <ButtonProfileEdit type="submit">수정</ButtonProfileEdit>
        </ButtonLink>
      </EditForm>
    </MyInfoWrapper>
  );
}

export default EditProfile;
