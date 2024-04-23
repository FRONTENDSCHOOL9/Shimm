import { useState } from 'react';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import useFormStore from '@zustand/form.mjs';
import useModalStore from '@zustand/modal';
import iconDelete from '@assets/images/icon-delete-post.svg';
import Input from '@components/input/Input';
import {
  SignUpWrapper,
  SignUpTitle,
  InputLabel,
  ErrorMessge,
  FlexContent,
  Stepper,
  CurrentStep,
  Step,
  ProfileImage,
  AddImageButton,
  ProfileImageWrapper,
  DeleteIcon,
  DeleteButton,
  MarginBottom,
} from '@pages/users/SignUp.style';

function SignUpTwoStep() {
  const axios = useCustomAxios();
  const { setShowModal, setModalData } = useModalStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    shouldFocusError: true,
    mode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState({
    imageFile: '',
    previewURL: `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`,
  });
  const { form } = useFormStore();

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

  function deleteImage() {
    setImage({
      imageFile: '',
      previewURL: `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`,
    });
  }

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      formData.type = 'user';
      formData.loginType = 'email';
      formData = { ...formData, ...form };
      delete formData.passwordConfirm;

      // 이미지 먼저 업로드
      if (formData.profileImage.length > 0) {
        // 프로필 이미지를 추가한 경우
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
      } else {
        formData.profileImage = `icon-user-default.png`;
      }

      const res = await axios.post('/users', formData);

      reset();

      setShowModal(true);
      setModalData({
        children: (
          <>
            <span>
              환영합니다, {res.data.item.name} 님.
              <br />
              가입이 완료되었습니다.
            </span>
            <br />
            <br />
            <p>로그인 후 서비스를 자유롭게 이용해 보세요!</p>
          </>
        ),
        button: 1,
        handleOk() {
          setShowModal(false);
          navigate('/users/login');
        },
        handleClose() {
          setShowModal(false);
          navigate('/users/login');
        },
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

  function handleBack() {
    navigate(-1);
  }

  return (
    <SignUpWrapper>
      <SignUpTitle>회원가입</SignUpTitle>
      <Stepper>
        <Step>기본 정보 입력</Step>
        <CurrentStep>프로필 설정</CurrentStep>
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ProfileImageWrapper>
            <ProfileImage src={image.previewURL} alt="프로필 이미지" />
          </ProfileImageWrapper>
          <FlexContent>
            <AddImageButton htmlFor="profileImage">
              프로필 사진 추가하기
            </AddImageButton>
            <input
              type="file"
              {...register('profileImage')}
              style={{ display: 'none' }}
              id="profileImage"
              name="profileImage"
              accept=".png, .jpeg, .jpg"
              onChange={saveImage}
              onClick={e => (e.target.value = null)}
            />
            <DeleteButton onClick={deleteImage}>
              <DeleteIcon src={iconDelete} alt="프로필 이미지 삭제하기" />
            </DeleteButton>
          </FlexContent>
        </div>
        <MarginBottom>
          <InputLabel htmlFor="name">닉네임</InputLabel>
          <Input
            type="text"
            id="name"
            placeholder="닉네임을 입력해 주세요."
            {...register('name', {
              required: '닉네임을 입력해 주세요.',
              minLength: {
                value: 2,
                message: '닉네임을 2글자 이상 입력하세요.',
              },
            })}
          />
          {errors.name && <ErrorMessge>{errors.name.message}</ErrorMessge>}
        </MarginBottom>
        <Button type="submit" size="full" bgColor="dark">
          회원가입 완료
        </Button>
      </form>

      <Button size="full" bgColor="primary" handleClick={handleBack}>
        이전
      </Button>

      {isLoading && <Loading />}
    </SignUpWrapper>
  );
}

export default SignUpTwoStep;
