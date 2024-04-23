import { ButtonLink, MyInfoWrapper } from '@pages/mypage/MyInfo';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import iconbase from '@assets/images/icon-login.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useUserStore from '@zustand/user.mjs';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useFormStore from '@zustand/form.mjs';
import { ErrorSharp } from '@mui/icons-material';

const FormWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  color: black;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  & img {
    width: 80px;
    border-radius: 50%;
    margin: 0 auto;
  }

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

const ImageLabel = styled.label`
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

  & img {
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 20px 0 8px;
`;

const InfoInput = styled.input`
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding-inline: 6px;
  box-sizing: border-box;
`;

const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordInput = styled.input`
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
    name: '',
    year: '',
    month: '',
    day: '',
  });
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  // const [profileImage, setProfileImage] = useState('');
  // const profileImageInput = useRef(null);
  const { name, password, passwordCheck, year, month, day } = userInput;
  const [userInfo, setUserInfo] = useState();
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    value: {
      name: user.name,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState({
    imageFile: '',
    previewURL: `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`,
  });

  const { form } = useFormStore();

  const YEAR = Array.from({ length: 100 }, (_, i) => 1923 + i);
  const MONTH = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  );
  const DAY = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  );

  // function handleImageChange(e) {
  //   e.stopPropagation();
  //   const file = e.target.files[0];
  //   if (file) {
  //     setProfileImage(file.name);
  //   }
  // }

  function togglePasswordInput() {
    setShowPasswordInput(!showPasswordInput);
  }

  async function fetchUserInfo() {
    const UserRes = await axios(`/users/${user._id}`);
    console.log(UserRes);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  function saveImage(e) {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        imageFile: e.target.files[0],
        previewURL: fileReader.result,
      });
    };
  }

  async function onSubmit(formData) {
    try {
      const res = await axios.patch(`/users/${user._id}`, formData);
      setIsLoading(true);
      formData.type = 'user';
      formData.loginType = 'email';
      formData = { ...formData, ...form };
      if (formData.profileImage) {
        if (formData.profileImage.length > 0) {
          const imageFormData = new FormData();
          imageFormData.append('attach', formData.profileImage[0]);

          const fileRes = await axios('/files', {
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            data: imageFormData,
          });

          formData.profileImage = fileRes.data.item[0].name;
        }
      }

      alert('프로필정보 변경이 완료되었습니다.');
      navigate('/mypage');
      setUser({
        _id: user._id,
        name: res.data.updated.name,
        email: user.email,
        type: user.type,
        phone: res.data.updated.phone,
        profileImg: res.data.updated.profileImg,
        token: user.token,
      });
    } catch (err) {
      console.error(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        console.error(err);
        alert(err.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  }

  return (
    <FormWrapper>
      <EditForm onSubmit={handleSubmit(onSubmit)}>
        <img
          src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profile}`}
          alt="유저 프로필 사진"
        />

        <ImageLabel htmlFor="profile-img" alt="프로필 이미지">
          프로필 사진 변경하기
        </ImageLabel>
        <ProfileImageInput
          type="file"
          id="profile-img"
          accept="image/*"
          // ref={profileImageInput}
          onChange={saveImage}
          onClick={e => (e.target.value = null)}
          {...register('profileImage')}
        />
        <Label htmlFor="nickname">닉네임</Label>
        <InfoInput
          type="text"
          id="nickname"
          {...register('name', {
            required: '닉네임을 입력하세요',
            minLength: {
              value: 2,
              message: '닉네임을 2글자 이상 입력하세요.',
            },
          })}
        />
        {errors.name && <p>{Errors.name.message}</p>}

        {/* {showPasswordInput && (
          <PasswordWrapper>
            <Label>비밀번호</Label>
            <PasswordInput
              type="password"
              id="password"
              {...register('password')}
              placeholder="소문자, 대문자, 특수문자를 조합하여 8자 이상 입력해 주세요."
            ></PasswordInput>

            <Label>비밀번호 확인</Label>
            <PasswordInput
              type="password"
              id="passwordCheck"
              {...register('passwordCheck')}
              placeholder="입력한 비밀번호 한번 더 입력해 주세요."
            ></PasswordInput>
          </PasswordWrapper>
        )} */}
        <Label htmlFor="select">생년월일</Label>
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
          <MiddleNumber
            type="number"
            onChange={handleInput}
            defaultValue={user.phone?.slice(3, 7)}
          />
          <LastNumber
            type="number"
            onChange={handleInput}
            defaultValue={user.phone?.slice(7, 11)}
          />
        </SelectBox>
        <ButtonProfileEdit type="submit">수정</ButtonProfileEdit>

        <ButtonLink>
          <ButtonProfileEdit type="button" onClick={togglePasswordInput}>
            {showPasswordInput ? '비밀번호 변경 취소' : '비밀번호 변경'}
          </ButtonProfileEdit>
        </ButtonLink>
      </EditForm>
    </FormWrapper>
  );
}

export default EditProfile;
