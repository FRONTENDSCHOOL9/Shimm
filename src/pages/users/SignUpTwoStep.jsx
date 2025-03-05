import iconCurrentStep from '@assets/images/icon-breadcrumb-active.svg';
import iconStep from '@assets/images/icon-breadcrumb.svg';
import iconDelete from '@assets/images/icon-delete-post.svg';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  AddImageButton,
  CurrentStep,
  DeleteButton,
  DeleteIcon,
  ErrorMessage,
  FlexContent,
  InputLabel,
  MarginBottom,
  ProfileImage,
  ProfileImageWrapper,
  SignUpTitle,
  SignUpWrapper,
  Step,
  Stepper,
} from '@pages/users/SignUp.style';
import useFormStore from '@zustand/form';
import useModalStore from '@zustand/modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUpTwoStep() {
  const axios = useCustomAxios();
  const { setShowModal, setModalData } = useModalStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    reset,
  } = useForm({
    values: {
      profileImage: 'icon-user-default.png',
    },
    shouldFocusError: true,
    mode: 'onChange',
  });
  const { form } = useFormStore();
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState({
    imageFile: '',
    previewURL: `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`,
  });

  function saveImage(e) {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setImage(prev => ({
        ...prev,
        imageFile: file,
        previewURL: fileReader.result,
      }));
    };
  }

  function deleteImage() {
    setValue('profileImage', null);
    setImage({
      imageFile: null,
      previewURL: `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`,
    });
  }

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      const { passwordConfirm, ...newFormData } = {
        ...formData,
        type: 'user',
        loginType: 'email',
        ...form,
      };

      if (newFormData.profileImage?.[0]) {
        const imageFormData = new FormData();
        imageFormData.append('attach', newFormData.profileImage[0]);

        const fileRes = await axios.post('/files', imageFormData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (fileRes.data.item.length !== 0) {
          newFormData.profileImage = fileRes.data.item[0].name;
        }
      } else {
        newFormData.profileImage = 'icon-user-default.png';
      }

      const res = await axios.post('/users', newFormData);

      const successModalContent = (
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
      );

      setShowModal(true);
      setModalData({
        children: successModalContent,
        button: 1,
        handleOk() {
          reset();
          setShowModal(false);
          navigate('/users/login');
        },
      });
    } catch (err) {
      if (err.response?.data.errors) {
        err.response.data.errors.map(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        setShowModal(true);
        setModalData({
          children: <span>회원가입에 실패하였습니다.</span>,
          button: 1,
          handleOk() {
            reset();
            setShowModal(false);
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SignUpWrapper>
          <SignUpTitle>회원가입</SignUpTitle>
          <Stepper>
            <Step>
              <img src={iconStep} />
              <span>기본 정보 입력</span>
            </Step>
            <CurrentStep>
              <img src={iconCurrentStep} />
              <span>프로필 설정</span>
            </CurrentStep>
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
                  {...register('profileImage', { onChange: saveImage })}
                  style={{ display: 'none' }}
                  id="profileImage"
                  accept=".png, .jpeg, .jpg"
                  onClick={e => (e.target.value = null)}
                />
                <DeleteButton type="button" onClick={deleteImage}>
                  <i>이미지 제거</i>
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
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </MarginBottom>
            <Button type="submit" size="full" bgColor="dark">
              회원가입 완료
            </Button>
          </form>

          <Button size="full" bgColor="primary" handleClick={handleBack}>
            이전
          </Button>
        </SignUpWrapper>
      )}
    </>
  );
}

export default SignUpTwoStep;
