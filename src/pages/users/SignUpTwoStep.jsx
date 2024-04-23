import { useState } from 'react';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import useFormStore from '@zustand/form.mjs';
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
} from '@pages/users/SignUp.style';

function SignUpTwoStep() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    values: {
      name: '닉네임을 입력해 주세요.',
    },
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

        console.log(fileRes);
        formData.profileImage = fileRes.data.item[0].name;
      } else {
        formData.profileImage = `icon-user-default.png`;
      }

      const res = await axios.post('/users', formData);
      alert(
        res.data.item.name +
          '님 회원가입이 완료 되었습니다.\n로그인 후에 이용하세요.',
      );
      navigate('/users/login');
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
          <ProfileImage src={image.previewURL} alt="프로필 이미지" />
          <InputLabel htmlFor="profile-img">프로필 사진 추가하기</InputLabel>
          <input
            type="file"
            style={{ display: 'none' }}
            id="profile-img"
            name="profile-img"
            accept=".png, .jpeg, .jpg"
            onChange={saveImage}
            onClick={e => (e.target.value = null)}
            {...register('profileImage')}
          />
          <button onClick={deleteImage}>프로필 이미지 삭제</button>
        </div>
        <div>
          <InputLabel htmlFor="name">닉네임</InputLabel>
          <Input
            type="text"
            id="name"
            placeholder="닉네임을 입력해 주세요."
            {...register('name', {
              required: '닉네임을 입력하세요.',
              minLength: {
                value: 2,
                message: '닉네임을 2글자 이상 입력하세요.',
              },
            })}
          />
          {errors.name && <ErrorMessge>{errors.name.message}</ErrorMessge>}
        </div>
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
